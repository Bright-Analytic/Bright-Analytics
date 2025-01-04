import Redis from 'ioredis'

let redis: Redis;

const redisClient = async () => {
    if(redis) return redis;
    try {
        console.log("[Redis]: Creating redis client...");
        redis = new Redis({
            port: Number(process.env.REDIS_PORT || 6379),
            host: process.env.REDIS_HOST || 'localhost',
            db: 0
        });
        console.log("[Redis]: Connected to redis server.")
        return redis;
    } catch (error) {
        console.error("Error during connecting to redis client: ", error);
        process.exit(1)
    }
}

export {
    redisClient
}