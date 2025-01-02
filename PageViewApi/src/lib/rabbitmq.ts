import amqplib, { Channel, Connection } from 'amqplib';

let connection:Connection;
let channel: Channel;

const queue = process.env.RMQ_QUEUE_NAME ?? 'analytics';

const username = process.env.RMQ_USERNAME!
const password = process.env.RMQ_PASSWORD!

const credentials = amqplib.credentials.plain(username, password)

const connectRmq = async ()=> {
    if(!connection){
        console.log("[RMQ]: Creating new connection.")
        connection = await amqplib.connect(`amqp://${process.env.RMQ_HOST!}:${process.env.RMQ_PORT!}`, {
            credentials
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