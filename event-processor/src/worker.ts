import dotenv from "dotenv";
import { ConsumeMessage } from "amqplib";
import { connectRmq } from "./lib/rabbitmq";
import { Consumer } from "kafkajs";
import { kafkaConsumer } from "./lib/kafka";
import { redisClient } from "./lib/redis";
import Redis from "ioredis";

dotenv.config({
  path: "../.env",
  debug: true,
});

let kfConsumer: Consumer;
let rClient: Redis;

async function onMessage(msg: ConsumeMessage | null) {
  console.log(
    "Incomming message: ",
    JSON.parse(msg?.content.toString() || "{}")
  );
  try {
    if (msg?.content) {
      const {
        hostname
      }: {
        hostname: string;
      } = JSON.parse(msg.content.toString());
      if (!hostname)
        return console.warn(
          "[worker]: Failed to get hostname from msg content."
        );
      await processKafkaEvents(hostname);
    } else {
      console.log("[worker]: Failed to get msg content.");
    }
  } catch (error: any) {
    console.error("Error during insert: ", error);
  }
}

async function processKafkaEvents(hostname: string) {
  console.log(`Processing kafka events for ${hostname}`);
  return new Promise((resolve, reject) => {
    kfConsumer.run({
      eachMessage: async ({ topic, message, partition }) => {
        const eventData = JSON.parse(message.value?.toString() || "{}");
        if (eventData.hostname == hostname) {
          console.log(`Found hostname: ${eventData.hostname}`);
          cacheEventsToRedis(eventData).catch(()=>{
            reject("Failed to publish messages.")
          });
        } else {
          console.log("Other messages: ", message.value?.toString())
        }
        resolve(null);
      },
    });
  });
}

async function cacheEventsToRedis(data: any) {
  rClient.set(
    `${data.hostname}:${data.added_unix}`,
    JSON.stringify(data),
    "EX",
    3600*24,
    (err, result) => {
      if (err) {
        console.error(
          `[Redis]: Failed to cached message ${JSON.stringify(data)}.`
        );
      } else {
        console.log("Sucessfully cached message to redis: ", result);
      }
    }
  );
}

(async () => {
  const channel = await connectRmq();
  rClient = await redisClient();
  kfConsumer = await kafkaConsumer();
  channel.consume(process.env.RMQ_ANALYTICS_QUEUE!, onMessage, {
    noAck: true,
  });
})();
