import dotenv from "dotenv";
import { ConsumeMessage } from "amqplib";
import { connectRmq } from "./lib/rabbitmq";
import { Consumer } from "kafkajs";
import { kafkaConsumer } from "./lib/kafka";
import { redisClient } from "./lib/redis";
import Redis from "ioredis";
import { hash } from "./lib/utils";
import { pulsarConsumer } from "./lib/pulsar";

dotenv.config({
  path: "../.env",
  debug: true,
});

let kfConsumer: Consumer;
let rClient: Redis;

let kfIsConnected: Boolean = true;

async function onMessage(msg: ConsumeMessage | null) {
  console.log(
    "Incomming message: ",
    JSON.parse(msg?.content.toString() || "{}")
  );
  try {
    if (msg?.content) {
      const {
        hostname,
      }: {
        hostname: string;
      } = JSON.parse(msg.content.toString());
      if (!hostname)
        return console.warn(
          "[worker]: Failed to get hostname from msg content."
        );
      await processPulsarEvents(hostname);
    } else {
      console.log("[worker]: Failed to get msg content.");
    }
  } catch (error: any) {
    console.error("Error during insert: ", error);
  }
}

async function processPulsarEvents(hostname: string) {
  const { client, consumer } = await pulsarConsumer();
  try {
    while (true) {
      const messages = await consumer.batchReceive();
      const requiredMessages = [];
      for (const msg of messages) {
        const data = JSON.parse(msg.getData().toString());
        if (hostname == data.hostname) {
          requiredMessages.push(data);
          consumer.acknowledge(msg);
        } else consumer.negativeAcknowledge(msg);
      }
      await cacheEventsToRedis(requiredMessages);
      break;
    }
  } catch (error: any) {
    console.error(`ERrror during processing pulsar events: `, error);
  } finally {
    await client.close();
    await consumer.close();
  }
}

async function processKafkaEvents(hostname: string) {
  console.log(`Processing kafka events for ${hostname}`);
  if (!kfIsConnected) await kfConsumer.connect();
  await kfConsumer.run({
    partitionsConsumedConcurrently: 1,
    eachBatch: async ({
      batch,
      heartbeat,
      isRunning,
      isStale,
      commitOffsetsIfNecessary,
      pause,
      resolveOffset,
      uncommittedOffsets,
    }) => {
      console.log(`Batch topic: `, batch.topic);
      if (batch.topic != "event-streams") return;
      try {
        console.log("message come to kafka");
        for (const message of batch.messages) {
          if (!isRunning() || isStale()) return;
          if (message.key?.toString() == hostname.trim()) {
            await cacheEventsToRedis(
              JSON.parse(message.value?.toString() || "{}")
            );
            console.log(`Cached data to redis for hostname: ${hostname}`);
            resolveOffset(message.offset);
          }
          await heartbeat();
        }
      } catch (error) {
        console.error("Error processing message:", error);
      }
      console.log("Resolving...");
      await kfConsumer.disconnect();
    },
  });
}

async function cacheEventsToRedis(data: any[]) {
  console.log("Data come to event processor:", data);
  return;
  // try {
  //   const timeBucket = Math.floor(data.added_unix / (60 * 60 * 24));
  //   const key = `meta:${data.hostname}:${timeBucket}`;
  //   const zsetKey = `timestamps:${data.hostname}`;
  //   const pipeline = rClient.pipeline();
  //   pipeline.hincrby(key, `country_code:${data.country_code}`, 1);
  //   pipeline.hincrby(key, `lang_region:${data.lang_region}`, 1);
  //   pipeline.hincrby(key, `path:${hash(data.path)}`, 1);
  //   pipeline.hincrby(key, `ip_address:${hash(data.ip_address)}`, 1);
  //   pipeline.hincrby(key, `referrer:${hash(data.referrer)}`, 1);
  //   pipeline.hincrby(key, `utm_source:${hash(data.utm_source)}`, 1);
  //   pipeline.hincrby(key, `utm_medium:${hash(data.utm_medium)}`, 1);
  //   pipeline.hincrby(key, `utm_campaign:${hash(data.utm_campaign)}`, 1);
  //   pipeline.hincrby(key, `utm_content:${hash(data.utm_content)}`, 1);
  //   pipeline.hincrby(key, `utm_term:${hash(data.utm_term)}`, 1);
  //   pipeline.hincrby(
  //     key,
  //     `document_referrer:${hash(data.document_referrer)}`,
  //     1
  //   );
  //   pipeline.hincrby(
  //     key,
  //     `browser:${hash(`${data.browser_name}-${data.browser_version}`)}`,
  //     1
  //   );
  //   pipeline.hincrby(
  //     key,
  //     `os:${hash(`${data.os_name}-${data.os_version}`)}`,
  //     1
  //   );
  //   pipeline.hincrby(
  //     key,
  //     `viewport:${hash(`${data.viewport_height}x${data.viewport_width}`)}`,
  //     1
  //   );
  //   pipeline.hincrby(
  //     key,
  //     `screen:${hash(`${data.screen_width}x${data.screen_height}`)}`,
  //     1
  //   );
  //   pipeline.zadd(zsetKey, data.added_unix, key);
  //   pipeline.expire(key, 3600 * 24 * 1); // Keep data for 7 days
  //   pipeline.expire(zsetKey, 3600 * 24 * 1);
  //   await pipeline.exec();

  //   console.log("Sucessfully cached message to redis.");
  // } catch (error) {
  //   console.error(`[Redis]: Failed to cached message ${JSON.stringify(data)}.`);
  // }
}

(async () => {
  const channel = await connectRmq();
  rClient = await redisClient();
  kfConsumer = await kafkaConsumer({
    groupId: "local-grp-2",
    heartbeatInterval: 3000,
    sessionTimeout: 15000,
    allowAutoTopicCreation: true,
  });
  kfConsumer.on("consumer.rebalancing", (event) => {
    console.log("Group is rebalancing:", event);
  });
  kfConsumer.on("consumer.network.request", async (e) => {
    console.log("Group is sending network request: ", e.payload.apiName);
  });
  kfConsumer.on("consumer.disconnect", (event) => {
    kfIsConnected = false;
    console.log("Consumer is disconnected.");
  });

  kfConsumer.on("consumer.connect", (e) => {
    kfIsConnected = true;
    console.log("Consumer connected success.");
  });

  // await kfConsumer.describeGroup();
  await channel.consume(process.env.RMQ_ANALYTICS_QUEUE!, onMessage, {
    noAck: true,
  });
})();
