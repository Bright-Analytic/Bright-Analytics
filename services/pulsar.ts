import Pulsar from 'pulsar-client'

/**
 * Just ai things 😅
 * The `PulsarClient` class provides methods to interact with a Pulsar instance.
 * It allows loading a Pulsar client, consumer, and producer.
 *
 * @class PulsarClient
 * @property {Pulsar.Client} client - The Pulsar client instance.
 * @property {Pulsar.Consumer} consumer - The Pulsar consumer instance.
 * @property {Pulsar.Producer} producer - The Pulsar producer instance.
 * @property {string} hostname - The hostname of the Pulsar service.
 * @property {number} port - The port of the Pulsar service.
 *
 * @constructor
 * @param {string} hostname - The hostname of the Pulsar service.
 * @param {number} port - The port of the Pulsar service.
 *
 * @method loadPulsar - Initializes the Pulsar client with the provided hostname and port.
 * @method loadConsumer - Loads a Pulsar consumer for the specified topic and subscription.
 * @param {string} topic - The topic to subscribe to.
 * @param {string} sub - The subscription name.
 * @returns {Promise<void>}
 * @throws Will throw an error if the consumer cannot be loaded.
 *
 * @method loadProducer - Loads a Pulsar producer for the specified topic.
 * @param {string} topic - The topic to produce messages to.
 * @returns {Promise<void>}
 * @throws Will throw an error if the producer cannot be loaded.
 */
export class PulsarClient {
    private client: Pulsar.Client;
    public consumer: Pulsar.Consumer;
    public producer: Pulsar.Producer;

    protected hostname: string;
    protected port: number;

    constructor(hostname: string, port: number) {
        this.hostname = hostname;
        this.port = port;
        this.loadPulsar();
    }

    private loadPulsar(){
        this.client = new Pulsar.Client({
            serviceUrl: `pulsar://${this.hostname}:${this.port}`,
        })
    }

    public async loadConsumer(topic: string, sub: string) {
        try {
            this.consumer = await this.client.subscribe({
                topic,
                subscription: sub
            })
        } catch (error: any) {
            console.error(`Error during loading consumer for Pulsar: ${error.message}\n`, error);
            process.exit(1)
        }
    }

    public async loadProducer(topic: string): Promise<void> {
        try {
            this.producer = await this.client.createProducer({
                topic
            })
        } catch (error: any) {
            console.error(`Error during loading pulsar producer: ${error.message}\n`, error)
        }
    }
}