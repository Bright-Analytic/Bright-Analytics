import Redis from "../event-processor/node_modules/ioredis"

/**
 * Represents a Redis client.
 */
export class RedisClient {
    /**
     * The Redis instance.
     */
    public redis: Redis;

    /**
     * The host address of the Redis server.
     */
    private host: string;

    /**
     * The port number of the Redis server.
     */
    private port: number;

    /**
     * Creates an instance of RedisClient.
     * @param port - The port number of the Redis server.
     * @param host - The host address of the Redis server.
     */
    constructor(port: number, host: string) {
        this.host = host;
        this.port = port;
        this.loadRedis();
    }

    /**
     * Loads the Redis instance with the specified configuration.
     * @private
     */
    private loadRedis() {
        try {
            this.redis = new Redis({
                port: this.port,
                host: this.host,
                db: 0
            });
        } catch (error: any) {
            console.error(`Error during loading redis: ${error.message}\n`, error);
        }
    }
}