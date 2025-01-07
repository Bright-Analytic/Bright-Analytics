import dotenv from "dotenv";

import { rawAnalytics } from "./db/schema";
import connectDB from "./db/connect";
import { kafkaConsumer, kafkaProducer } from "./lib/kafka";
import { Consumer, Producer } from "kafkajs";
import { Channel } from "amqplib";
import { connectRmq } from "./lib/rabbitmq";

let kfConsumer: Consumer;
let kfProducer: Producer;
let rmqChannel: Channel;

dotenv.config({
  path: "../.env",
  debug: true,
});

const consumeRabbitMq = () => {
  console.log(
    `Running rabbitmq consumer for queue ${process.env.RMQ_PRE_ANALYTICS_QUEUE}`
  );
  try {
    rmqChannel.consume(
      process.env.RMQ_PRE_ANALYTICS_QUEUE!,
      (message) => {
        if (message != null) {
          const msg = message.content.toString();
          console.log(
            `Incomming message from ${process.env.RMQ_PRE_ANALYTICS_QUEUE} queue: ${msg}`
          );
        }
      },
      {
        noAck: true,
      }
    );
  } catch (error) {}
};

const consumerKafka = async () => {
  console.log(`Running kafka consumer for topic `);
  const db = await connectDB();
  await kfConsumer.run({
    eachBatch: async ({
      batch,
      resolveOffset,
      heartbeat,
      isRunning,
      isStale,
    }) => {

        if(batch.topic != "raw-analytics"){
            console.log(`Wrong topic: ${batch.topic}`)
            return;
        }

      console.log(`Processing batch of ${batch.messages.length} messages`);

      const incomingMessages = [];

      for (const message of batch.messages) {
        if (!isRunning() || isStale()) break;

        incomingMessages.push(JSON.parse(message.value?.toString() || "{}"));

        resolveOffset(message.offset);
      }
      await db.insert(rawAnalytics).values(incomingMessages).execute();
      await kfProducer.send({
        topic: "event",
        messages: batch.messages,
      });
      await heartbeat();
    },
  });
};

(async () => {
  rmqChannel = await connectRmq();
  kfConsumer = await kafkaConsumer({
    groupId: "0",
    maxWaitTimeInMs: 1024,
  });
  kfProducer = await kafkaProducer();

  await kfConsumer.subscribe({ topic: "raw-analytics", fromBeginning: true });

  await Promise.all([consumerKafka, consumeRabbitMq]);
})();
