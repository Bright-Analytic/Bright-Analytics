import dotenv from "dotenv";

import { rawAnalytics } from "./db/schema";
import connectDB from "./db/connect";
import { kafkaConsumer, kafkaProducer } from "./lib/kafka";
import { Consumer, Producer } from "kafkajs";
import { Channel } from "amqplib";
import { connectRmq } from "./lib/rabbitmq";
import Pulsar from "pulsar-client";
import { pulsarProducer } from "./lib/pulsar";

let kfConsumer: Consumer;
let kfProducer: Producer;
let rmqChannel: Channel;
let pProducer: Pulsar.Producer;

dotenv.config({
  path: "../.env",
  debug: true,
});

const consumeRabbitMq = async () => {
  console.log(
    `Running rabbitmq consumer for queue ${process.env.RMQ_PRE_ANALYTICS_QUEUE}`
  );
  try {
    await rmqChannel.consume(
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
  } catch (error) {
    console.error(`Error during consuming rabbitmq :`, error);
  }
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
      commitOffsetsIfNecessary,
    }) => {
      if (batch.topic != "raw-analytics") {
        console.log(`Wrong topic: ${batch.topic}`);
        return;
      }

      console.log(`Processing batch of ${batch.messages.length} messages`);

      const incomingMessages = [];
      pProducer = await pulsarProducer();

      for (const message of batch.messages) {
        if (!isRunning() || isStale()) break;
        incomingMessages.push(JSON.parse(message.value?.toString() || "{}"));
        if (message.value != null)
          pProducer.send({
            data: message.value,
          });
      }
      try {
        await db.insert(rawAnalytics).values(incomingMessages).execute();
        // await kfProducer.send({
        //   topic: "event-streams",
        //   messages: batch.messages.map((e)=>({ key: e.key, value: e.value })),
        // });

        console.log(`Send all batch messages to event-streams`);
        for (const message of batch.messages) {
          if (!isRunning() || isStale()) break;
          resolveOffset(message.offset);
        }
        await heartbeat();
      } catch (error: any) {
        console.error(`Error during processing batch.: ${error.message}`);
      }
    },
  });
};

(async () => {
  rmqChannel = await connectRmq();
  kfConsumer = await kafkaConsumer({
    groupId: "local-grp",
    maxWaitTimeInMs: 1024,
  });
  kfProducer = await kafkaProducer();

  await kfConsumer.subscribe({ topic: "raw-analytics", fromBeginning: true });

  await Promise.all([consumerKafka(), consumeRabbitMq()]);

  console.log("Exiting...");
})();
