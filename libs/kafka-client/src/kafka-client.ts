import {
  Kafka,
  Consumer,
  Producer,
  ConsumerConfig,
  ConsumerSubscribeTopics,
  logLevel,
} from "kafkajs";
import dotenv from 'dotenv'

dotenv.config({
  path: "../../.env"
})

/**
 * KafkaClient class for managing Kafka consumers and producers.
 */
export class KafkaClient {
  private kafka: Kafka;
  public consumer?: Consumer;
  public producer?: Producer;

  constructor(
    clientId: string = "analyze-core",
    brokers: string[] = [`${process.env.KAFKA_HOST || "kafka-service"}:${process.env.KAFKA_PORT || 9092}`,],
    private lLevel: logLevel = logLevel.ERROR,
  ) {
    this.kafka = new Kafka({
      clientId,
      brokers,
      logLevel: this.lLevel,
    });
  }

  /**
   * Initializes and connects a Kafka consumer.
   */
  async initConsumer(
    config: ConsumerConfig,
    topics: ConsumerSubscribeTopics,
  ): Promise<void> {
    this.consumer = this.kafka.consumer(config);
    await this.consumer.connect();
    await this.consumer.subscribe(topics);
  }

  /**
   * Initializes and connects a Kafka producer.
   */
  async initProducer(): Promise<void> {
    this.producer = this.kafka.producer();
    await this.producer.connect();
  }

  /**
   * Disconnects the Kafka client.
   */
  async disconnect(): Promise<void> {
    if (this.consumer) await this.consumer.disconnect();
    if (this.producer) await this.producer.disconnect();
  }
}
