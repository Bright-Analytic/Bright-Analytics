import Redis from "ioredis";

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
  constructor(
    port: number = +process.env.REDIS_PORT!,
    host: string = process.env.REDIS_HOST!,
    uri: string | null = process.env.REDIS_URI || null
  ) {
    this.host = host;
    this.port = port;
    if(uri) this.redis = new Redis(uri)
    else this.redis = new Redis({
      port: this.port,
      host: this.host
    });
  }

  async connect() {
    if (this.redis.status == "close" || this.redis.status == "end")
      await this.redis.connect();
  }
}
