import fs from "fs";
import {
  Kafka,
  Consumer,
  Producer,
  ConsumerConfig,
  ConsumerSubscribeTopics,
  logLevel,
} from "kafkajs";
import dotenv from "dotenv";
dotenv.config({
  path: "../../../.env",
});

/**
 * KafkaClient class for managing Kafka consumers and producers.
 */
export class KafkaClient {
  private kafka: Kafka;
  public consumer?: Consumer;
  public producer?: Producer;

  constructor(
    clientId: string = "analyze-core",
    private lLevel: logLevel = logLevel.ERROR
  ) {
    this.kafka = new Kafka({
      clientId,
      brokers: [process.env.KAFKA_BROKER_URI!],
      logLevel: this.lLevel,
      ssl: {
        ca: process.env.KAFKA_CA_CERT!,
      },
      sasl: {
        mechanism: "scram-sha-256",
        username: process.env.KAFKA_SASL_USERNAME!,
        password: process.env.KAFKA_SASL_PASSWORD!,
      },
    });
  }

  /**
   * Initializes and connects a Kafka consumer.
   */
  async initConsumer(
    config: ConsumerConfig,
    topics: ConsumerSubscribeTopics
  ): Promise<void> {
    this.consumer = this.kafka.consumer(config);
    await this.consumer.connect();
    await this.consumer.subscribe(topics);
  }

  /**
   * Initializes and connects a Kafka producer.
   */
  async initProducer(): Promise<void> {
    this.producer = this.kafka.producer({
      allowAutoTopicCreation: true,
    });
    await this.producer.connect();
  }

  /**
   * Disconnects the Kafka client.
   */
  async disconnect(): Promise<void> {
    if (this.consumer) await this.consumer.disconnect();
    if (this.producer) await this.producer.disconnect();
  }

  async loadTopic(topicName: string) {
    const topics = await this.kafka.admin().listTopics();
    if (topicName! in topics) {
      await this.kafka.admin().createTopics({
        topics: [
          {
            topic: "raw-analytics",
            numPartitions: 1,
          },
        ],
      });
    }
  }
}
