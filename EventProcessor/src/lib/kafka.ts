import { Consumer, Kafka, logLevel } from "kafkajs";
import dotenv from "dotenv";
dotenv.config({
  path: "../.env",
});

let kafka: Kafka;
let consumer: Consumer;

const kafkaConsumer = async () => {
  if (kafka && consumer) {
    return consumer;
  }
  try {
    console.log("[kafkajs]: Creating new client...")
    kafka = new Kafka({
      clientId: "analyze-core",
      brokers: ["localhost:9092"],
      logLevel: logLevel.DEBUG,
    });
    consumer = kafka.consumer({
      groupId: "0"
    });
    await consumer.connect()
    await consumer.subscribe({
      topic: "event-streams",
      fromBeginning: true
    })
    return consumer;
  } catch (error) {
    console.error("Error during connect kafka: ", error);
    process.exit(1);
  }
};



export { kafkaConsumer };
