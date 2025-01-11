import dotenv from "dotenv";
dotenv.config({
  path: "../.env",
});
import { Kafka, logLevel, Producer } from "kafkajs";

let kafka: Kafka;
let producer: Producer;

const kafkaProducer = async () => {
  if (kafka && producer) {
    return producer;
  }
  try {
    console.log("[kafkajs]: Creating new client...");
    kafka = new Kafka({
      clientId: "analyze-core",
      brokers: [
        `${process.env.KAFKA_HOST || "kafka-service"}:${process.env.KAFKA_PORT || 9092}`,
      ],
      logLevel: logLevel.ERROR,
    });
    producer = kafka.producer();
    await producer.connect();

    return producer;
  } catch (error: any) {
    console.error("Error during connect kafka: ", error);
    process.exit(1);
  }
};

export { kafkaProducer };
