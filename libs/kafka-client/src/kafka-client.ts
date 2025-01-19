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
  path: "../../../.env"
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
    brokers: string[] = process.env.KAFKA_BROKER_URI ? [process.env.KAFKA_BROKER_URI] : [`${process.env.KAFKA_HOST}:${process.env.KAFKA_PORT}`,],
    private lLevel: logLevel = logLevel.ERROR,
  ) {
    this.kafka = new Kafka({
      clientId,
      brokers,
      logLevel: this.lLevel,
      ssl: {
        rejectUnauthorized: false,
        cert: process.env.KAFKA_ACCESS_CERT!,
        ca: process.env.KAFKA_CA_CERT!,
        key: process.env.KAFKA_ACCESS_KEY!,
        host: (process.env.KAFKA_BROKER_URI!).split(':')[0],
        port: +(process.env.KAFKA_BROKER_URI!).split(':')[1]
      }
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

  async loadTopic(topicName: string) {
    const topics = await this.kafka.admin().listTopics();
    if(topicName !in topics){
      await this.kafka.admin().createTopics({
        topics: [{
          topic: "raw-analytics",
          numPartitions: 2,
        }],
      })
    }
  }
}
