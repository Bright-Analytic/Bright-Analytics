import { Consumer, Kafka, Producer,ConsumerConfig, logLevel, ConsumerSubscribeTopics } from "kafkajs"


/**
 * KafkaClient class to handle Kafka consumer and producer.
 */
export class KakfaClient {
    kafka: Kafka;
    consumer: Consumer;
    producer: Producer;
    lLevel = logLevel.ERROR

    /**
     * Creates an instance of KafkaClient.
     * @param clientId - The client ID for the Kafka instance.
     * @param brokers - An array of broker addresses.
     * @param lLevel - The log level for Kafka.
     */
    constructor(clientId: string, brokers: string[], lLevel: logLevel){
        this.lLevel = lLevel
        this.kafka = new Kafka({
            clientId: clientId,
            brokers: brokers,
            logLevel: this.lLevel
        })
    }

    /**
     * Loads and connects the Kafka consumer.
     * @param config - The configuration for the Kafka consumer.
     * @param consumerSubscriptionTopics - The topics to subscribe to.
     * @throws Will throw an error if the consumer fails to load or connect.
     */
    async loadConsumer(config: ConsumerConfig, consumerSubscriptionTopics: ConsumerSubscribeTopics){
        try {
            this.consumer = this.kafka.consumer(config)
            await this.consumer.connect()
            await this.consumer.subscribe(consumerSubscriptionTopics)
        } catch (error: any) {
            console.error(`Failed to load kafka consumer: ${error.message} ||`, error)
            process.exit(1)
        }
    }

    /**
     * Loads and connects the Kafka producer.
     * @throws Will throw an error if the producer fails to load or connect.
     */
    async loadProducer(){
        try {
            this.producer = this.kafka.producer();
            await this.producer.connect();
        } catch (error: any) {
            console.error(`Failed to load kafka producer: ${error.message} ||`, error)
            process.exit(1)
        }
    }
}