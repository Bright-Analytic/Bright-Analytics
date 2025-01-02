import dotenv from 'dotenv'
import { connectRmq } from './lib/rabbitmq';
import { ConsumeMessage } from 'amqplib';

import { rawAnalytics } from './db/schema';
import connectDB from './db/connect';
import { kafkaProducer } from './lib/kafka';
import { Producer } from 'kafkajs';

let kfProducer: Producer;

dotenv.config({
    path: "../.env",
    debug: true
});

async function onMessage(msg: ConsumeMessage | null){
    console.log("Incomming message: ", JSON.parse(msg?.content.toString() || "{}"));
    const db = await connectDB();
    try {
        if(msg?.content){
            await db.insert(rawAnalytics).values(JSON.parse(msg.content.toString())).execute();
            await kfProducer.send({
                topic: "analytics",
                messages: [
                    {
                        value: msg.content.toString()
                    }
                ]
            })
        } else {
            console.log("[worker]: Failed to get msg content.")
        }
    } catch (error: any) {
        console.error("Error during insert: ", error);
    }
}

(async ()=>{
    const channel = await connectRmq();
    kfProducer = await kafkaProducer();
    channel.consume(process.env.MQ_QUEUE_NAME || "analytics", onMessage, {
        noAck: true
    })
})();