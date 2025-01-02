import amqplib, { Channel, Connection, credentials } from 'amqplib';
import dotenv from 'dotenv'
dotenv.config({
    path: "../.env"
})

let connection:Connection;
let channel: Channel;

const queue = process.env.RMQ_QUEUE_NAME ?? 'analytics';

const host = process.env.RMQ_HOST!
const port = process.env.RMQ_PORT!
const username = process.env.RMQ_USERNAME!
const password = process.env.RMQ_PASSWORD!

console.log(`amqp://${username}:${password}@${host}:${port}`)

const connectRmq = async ()=> {
    if(!connection){
        console.log("[RMQ]: Creating new connection.")
        connection = await amqplib.connect(`amqp://${host}:${port}`, {
            credentials: credentials.plain(username, password)
        })
    }
    if(channel) return channel;
    console.log("[RMQ]: Creating new channel.")
    channel = await connection.createChannel();
    
    await channel.assertQueue(queue, {
        durable: true
    });

    return channel;
}    

export {
    connectRmq
}