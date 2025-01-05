import Redis from 'ioredis'

const redisClient = async () => {
    try {
        console.log("[Redis]: Creating redis client...");
        global.redis = new Redis({
            port: Number(process.env.REDIS_PORT || 6379),
            host: process.env.REDIS_HOST || 'localhost',
            db: 0
        });
        console.log("[Redis]: Connected to redis server.")
    } catch (error) {
        console.error("Error during connecting to redis client: ", error);
        process.exit(1)
    }
}

export {
    redisClient
}