import dotenv from "dotenv";
import { ConsumeMessage } from "amqplib";
import { hash } from "./lib/utils";
import { PulsarClient } from "@shared/pulsar-client";

dotenv.config({
  path: "../.env",
  debug: true,
});

let pulsar: PulsarClient;

async function onMessage(msg: ConsumeMessage | null) {
  console.log(
    "Incomming message: ",
    JSON.parse(msg?.content.toString() || "{}"),
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
          "[worker]: Failed to get hostname from msg content.",
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
  await pulsar.loadConsumer("persistent://public/default/event-streams", "sub1");
  if(!pulsar.consumer) throw new Error("Consumer not found.");
  try {
    while (true) {
      const messages = await pulsar.consumer.batchReceive();
      const requiredMessages = [];
      for (const msg of messages) {
        const data = JSON.parse(msg.getData().toString());
        if (hostname == data.hostname) {
          requiredMessages.push(data);
          pulsar.consumer.acknowledge(msg);
        } else pulsar.consumer.negativeAcknowledge(msg);
      }
      await cacheEventsToRedis(requiredMessages);
      break;
    }
  } catch (error: any) {
    console.error(`ERrror during processing pulsar events: `, error);
  } finally {
    
  }
}

async function cacheEventsToRedis(arr: any[]) {
  console.log("Data come to event processor:", arr);
  try {
    const pipeline = rClient.pipeline();
    for (const data of arr) {
      const timeBucket = Math.floor(data.added_unix / (60 * 60 * 24));
      const key = `meta:${data.hostname}:${timeBucket}`;
      const zsetKey = `timestamps:${data.hostname}`;
      pipeline.hincrby(key, `country_code:${data.country_code}`, 1);
      pipeline.hincrby(key, `lang_region:${data.lang_region}`, 1);
      pipeline.hincrby(key, `path:${hash(data.path)}`, 1);
      pipeline.hincrby(key, `ip_address:${hash(data.ip_address)}`, 1);
      pipeline.hincrby(key, `referrer:${hash(data.referrer)}`, 1);
      pipeline.hincrby(key, `utm_source:${hash(data.utm_source)}`, 1);
      pipeline.hincrby(key, `utm_medium:${hash(data.utm_medium)}`, 1);
      pipeline.hincrby(key, `utm_campaign:${hash(data.utm_campaign)}`, 1);
      pipeline.hincrby(key, `utm_content:${hash(data.utm_content)}`, 1);
      pipeline.hincrby(key, `utm_term:${hash(data.utm_term)}`, 1);
      pipeline.hincrby(
        key,
        `document_referrer:${hash(data.document_referrer)}`,
        1,
      );
      pipeline.hincrby(
        key,
        `browser:${hash(`${data.browser_name}-${data.browser_version}`)}`,
        1,
      );
      pipeline.hincrby(
        key,
        `os:${hash(`${data.os_name}-${data.os_version}`)}`,
        1,
      );
      pipeline.zadd(zsetKey, data.added_unix, key);
      pipeline.expire(key, 3600 * 24 * 1); // Keep data for 7 days
      pipeline.expire(zsetKey, 3600 * 24 * 1);

      pipeline.set(`${data.hostname}:${data.added_unix}`, 1);
    }
    await pipeline.exec();
    console.log("Sucessfully cached message to redis.");
  } catch (error) {
    console.error(`[Redis]: Failed to cached message ${JSON.stringify(arr)}.`);
  }
}

(async () => {
  pulsar = new PulsarClient(process.env.PULSAR_HOSTNAME!, Number(process.env.PULSAR_PORT!))
  await channel.consume(process.env.RMQ_ANALYTICS_QUEUE!, onMessage, {
    noAck: true,
  });
})();
