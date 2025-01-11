import { Consumer, ConsumerConfig, Kafka, logLevel } from "kafkajs";
import dotenv from "dotenv";
dotenv.config({
  path: "../.env",
});

let kafka: Kafka;
let consumer: Consumer;

const kafkaConsumer = async (config?: ConsumerConfig) => {
  if (kafka && consumer) {
    return consumer;
  }
  try {
    console.log("[kafkajs]: Creating new client...");
    kafka = new Kafka({
      clientId: "analyze-core",
      brokers: [`${process.env.KAFKA_HOST}:${process.env.KAFKA_PORT}`],
      logLevel: logLevel.ERROR,
    });
    consumer = kafka.consumer({
      groupId: "local-grp",
      ...config,
    });
    await consumer.connect();
    await consumer.subscribe({
      topics: ["event-streams"],
      fromBeginning: true,
    });
    return consumer;
  } catch (error) {
    console.error("Error during connect kafka: ", error);
    process.exit(1);
  }
};

export { kafkaConsumer };
