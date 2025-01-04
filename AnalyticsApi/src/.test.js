import Redis from 'ioredis'

(async () => {
    try {
        console.log("[Redis]: Creating redis client...");
        const redis = new Redis({
            port: Number(process.env.REDIS_PORT || 6379),
            host: process.env.REDIS_HOST || 'localhost',
            db: 0
        });

        const data = Array.from(Buffer.from(JSON.stringify({
            hostname: "adityasharma.live",
            path: '/ai'
        })))
        console.log(data)

        const result = await redis.call('JSON.SET', 'hostname0:'+Date.now(), '$', JSON.stringify({ data: 'hello world' }))
        console.log(result)

        const re2 = await redis.call('KEYS', 'hostname0:*')
        console.log("[Redis]: res2", re2, typeof(re2))

        for(const key of re2){
            console.log(await redis.call('JSON.GET', key.toString()))
        }

        return redis;
    } catch (error) {
        console.error("Error during connecting to redis client: ", error);
        process.exit(1)
    }
})()
