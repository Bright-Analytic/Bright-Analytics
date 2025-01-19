import dotenv from "dotenv";
import { KafkaClient } from "@shared/kafka-client";
import { DrizzleDb } from "@shared/drizzle-client";
import { RedisClient } from "@shared/redis-client"
import { schemas } from "@shared/drizzle-client";
import { hash } from "./lib/utils";

dotenv.config({
  path: "../../.env",
  debug: true,
});

let kafkaClient: KafkaClient;
let drizzleDb: DrizzleDb;
let redisClient: RedisClient;

const consumerKafka = async () => {
  console.log(`Running kafka consumer for topic `);
  if(!kafkaClient.consumer) throw new Error("Kafka consumer not initialized yet.")
  await kafkaClient.consumer.run({
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

      for (const message of batch.messages) {
        if (!isRunning() || isStale()) break;
        incomingMessages.push(JSON.parse(message.value?.toString() || "{}"));
      }
      try {
        try {
          await drizzleDb.db.insert(schemas.rawAnalytics).values(incomingMessages).execute();
        } catch (error: any) {
          console.error(`Error during inserting data to db.: ${error.message}\n`)
        }
        try {
          await cacheEventsToRedis(incomingMessages);
        } catch (error: any) {
          console.error(`Error caching data to redis.: ${error.message}`);
        }

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

async function cacheEventsToRedis(arr: any[]) {
  console.log("Data come to event processor:", arr);
  try {
    const pipeline = redisClient.redis.pipeline();
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
  kafkaClient = new KafkaClient('queue-worker');
  
  drizzleDb = new DrizzleDb();
  redisClient = new RedisClient();
  await redisClient.connect();

  await kafkaClient.loadTopic('raw-analytics')
  await kafkaClient.initConsumer({
    groupId: "local-grp",
    maxWaitTimeInMs: 1012,
    allowAutoTopicCreation: true,
    
  }, {
    topics: ["raw-analytics"],
    fromBeginning: true
  });
  await kafkaClient.initProducer();

  await consumerKafka();
})();
