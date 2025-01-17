import { KafkaClient } from "@shared/kafka-client";
import { PulsarClient } from "@shared/pulsar-client";
import { RabbitMq } from "@shared/rabbitmq-client";
import { DrizzleDb } from "@shared/drizzle-client";
import dotenv from "dotenv";
import { schemas } from "@shared/drizzle-client";

dotenv.config({
  path: "../../.env",
  debug: true,
});

let kafka: KafkaClient;
let pulsar: PulsarClient;
let rmq: RabbitMq;
let drizzleDb: DrizzleDb;

const consumeRabbitMq = async () => {
  console.log(
    `Running rabbitmq consumer for queue ${process.env.RMQ_PRE_ANALYTICS_QUEUE}`,
  );
  try {
    if(!rmq.channel) throw new Error("Channel not loaded yet.");
    await rmq.channel.consume(
      process.env.RMQ_PRE_ANALYTICS_QUEUE!,
      (message) => {
        if (message != null) {
          const msg = message.content.toString();
          console.log(
            `Incomming message from ${process.env.RMQ_PRE_ANALYTICS_QUEUE} queue: ${msg}`,
          );
        }
      },
      {
        noAck: true,
      },
    );
  } catch (error) {
    console.error(`Error during consuming rabbitmq :`, error);
  }
};

const consumerKafka = async () => {
  console.log(`Running kafka consumer for topic `);
  if(!kafka.consumer) throw new Error("Kafka consumer not initialized yet.")
  await kafka.consumer.run({
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
      await pulsar.loadProducer("persistent://public/default/event-streams")
      if(!pulsar.producer) throw new Error("Pulsar producer not initialized.")

      for (const message of batch.messages) {
        if (!isRunning() || isStale()) break;
        incomingMessages.push(JSON.parse(message.value?.toString() || "{}"));
        if (message.value != null)
          pulsar.producer.send({
            data: message.value,
          });
      }
      try {
        await drizzleDb.db.insert(schemas.rawAnalytics).values(incomingMessages).execute();

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
  kafka = new KafkaClient();
  pulsar = new PulsarClient();
  rmq = new RabbitMq();
  drizzleDb = new DrizzleDb();

  await kafka.initConsumer({
    groupId: "local-grp",
    maxWaitTimeInMs: 1012
  }, {
    topics: ["raw-analytics"],
    fromBeginning: true
  });
  await kafka.initProducer();

  await Promise.all([consumerKafka(), consumeRabbitMq()]);

  console.log("Exiting...");
})();
