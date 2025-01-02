import dotenv from 'dotenv'
import { connectRmq } from './lib/rabbitmq';
import { ConsumeMessage } from 'amqplib';

import { rawAnalytics } from './db/schema';
import connectDB from './db/connect';

dotenv.config({
    path: "../.env",
    debug: true
});

async function onMessage(msg: ConsumeMessage | null){
    console.log("Incomming message: ", msg?.content);
    const db = await connectDB();
    try {
        await db.insert(rawAnalytics).values(JSON.parse(msg?.content.toString() || "{}")).execute();
    } catch (error: any) {
        console.error("Error during insert: ", error);
    }
}

(async ()=>{
    const channel = await connectRmq();
    channel.consume(process.env.MQ_QUEUE_NAME || "analytics", onMessage, {
        noAck: true
    })
})();