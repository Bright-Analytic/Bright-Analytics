import { Kafka, logLevel, Producer } from "kafkajs";
import dotenv from "dotenv";
dotenv.config({
  path: "../.env",
});

let kafka: Kafka;
let producer: Producer;

const kafkaProducer = async () => {
  if (kafka && producer) {
    return producer;
  }
  try {
    console.log("[kafkajs]: Creating new client...")
    kafka = new Kafka({
      clientId: "analyze-core",
      brokers: ["localhost:9092"],
      logLevel: logLevel.DEBUG,
    });
    producer = kafka.producer();
    await producer.connect();

    return producer;
  } catch (error) {
    console.error("Error during connect kafka: ", error);
    process.exit(1);
  }
};

export { kafkaProducer };
