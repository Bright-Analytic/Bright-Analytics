import dotenv from "dotenv";

import { rawAnalytics } from "./db/schema";
import connectDB from "./db/connect";
import { kafkaConsumer, kafkaProducer } from "./lib/kafka";
import { Consumer, Producer } from "kafkajs";

let kfConsumer: Consumer;
let kfProducer: Producer;

dotenv.config({
  path: "../.env",
  debug: true,
});

(async () => {
  const db = await connectDB();
  kfConsumer = await kafkaConsumer({
    groupId: "0",
    maxWaitTimeInMs: 1024,
  });
  kfProducer = await kafkaProducer();

  await kfConsumer.subscribe({ topic: "raw-analytics", fromBeginning: true });

  await kfConsumer.run({
    eachBatch: async ({
      batch,
      resolveOffset,
      heartbeat,
      isRunning,
      isStale,
    }) => {
      console.log(`Processing batch of ${batch.messages.length} messages`);

      const incomingMessages = [];

      for (const message of batch.messages) {
        if (!isRunning() || isStale()) break;

        incomingMessages.push(JSON.parse(message.value?.toString() || "{}"));

        resolveOffset(message.offset);
      }
      await db.insert(rawAnalytics).values(incomingMessages).execute();
      await kfProducer.send({
        topic: 'event-streams',
        messages: batch.messages
      })
      await heartbeat();
    },
  });
})();
