import dotenv from "dotenv";
dotenv.config({
  path: "../.env",
});
import { Consumer, ConsumerConfig, Kafka, logLevel, Producer } from "kafkajs";

let kafka: Kafka;
let consumer: Consumer;
let producer: Producer;

const kafkaClient = async () => {
  if (kafka) {
    return kafka;
  }
  try {
    console.log("[kafkajs]: Creating new client...")
    kafka = new Kafka({
      clientId: "analyze-core",
      brokers: [`${process.env.KAFKA_HOST || "kafka-service"}:${process.env.KAFKA_PORT || 9092}`],
      logLevel: logLevel.ERROR
    });
   return kafka;
  } catch (error: any) {
    console.error("Error during connect kafka: ", error);
    process.exit(1);
  }
};

const kafkaProducer = async () => {
  if(!kafka) await kafkaClient();
  if(producer) return producer;

  try {
    producer = kafka.producer();
    await producer.connect();
    return producer;
  } catch (error: any) {
    console.error("Error during connect kafka: ", error);
    process.exit(1);
  }
};

const kafkaConsumer = async (config?: ConsumerConfig) => {
  if(!kafka) await kafkaClient();
  if(consumer) return consumer;

  try {
    consumer = kafka.consumer({groupId: 'local-grp', ...config});
    await consumer.connect()
    return consumer;
  } catch (error: any) {
    console.error("Error during connect kafka: ", error);
    process.exit(1);
  }
};


export { kafkaProducer, kafkaConsumer };
