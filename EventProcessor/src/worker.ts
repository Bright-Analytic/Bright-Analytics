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
        hostname,
        interval,
      }: {
        hostname: string;
        interval: number;
      } = JSON.parse(msg.content.toString());
      if (!hostname || !interval)
        return console.warn(
          "[worker]: Failed to get hostname or interval from msg content."
        );
      processKafkaEvents(hostname, interval);
    } else {
      console.log("[worker]: Failed to get msg content.");
    }
  } catch (error: any) {
    console.error("Error during insert: ", error);
  }
}

async function processKafkaEvents(hostname: string, interval: number) {
  console.log(`Processing kafka events for ${hostname}`);
  return new Promise((resolve, reject) => {
    kfConsumer.run({
      eachMessage: async ({ topic, message, partition }) => {
        const eventData = JSON.parse(message.value?.toString() || "{}");
        if (eventData.hostname == hostname) {
          console.log(`Found hostname: ${eventData.hostname}`);
          // write data to redis
          publishEventsToRedis(eventData, interval).catch(()=>{
            reject("Failed to publish messages.")
          });
        } else {
          // checking what is comming here.
          console.log("Other messages: ", message.value?.toString())
        }
        resolve(null);
      },
    });
  });
}

async function publishEventsToRedis(data: any, interval: number) {
  rClient.set(
    data.hostname,
    JSON.stringify(data),
    "EX",
    interval,
    (err, result) => {
      if (err) {
        console.error(
          `[Redis]: Failed to publish message ${JSON.stringify(data)}.`
        );
      } else {
        console.log("Sucessfully publish data to redis: ", result);
      }
    }
  );

  // rClient.publish(process.env.REDIS_CHANNEL!, JSON.stringify(data), (err, result)=>{
  //   if(err){
  //     console.error(`[Redis]: Failed to publish message ${JSON.stringify(data)}.`)
  //   } else {
  //     console.log("Sucessfully publish data to redis.")
  //   }
  // })
}

(async () => {
  const channel = await connectRmq();
  rClient = await redisClient();
  kfConsumer = await kafkaConsumer();
  channel.consume(process.env.RMQ_ANALYTICS_QUEUE!, onMessage, {
    noAck: true,
  });
})();
