import dotenv from "dotenv";
import { ConsumeMessage } from "amqplib";
import { connectRmq } from "./lib/rabbitmq";
import { Consumer } from "kafkajs";
import { kafkaConsumer } from "./lib/kafka";

dotenv.config({
  path: "../.env",
  debug: true,
});

let kfConsumer: Consumer;

async function onMessage(msg: ConsumeMessage | null) {
  console.log(
    "Incomming message: ",
    JSON.parse(msg?.content.toString() || "{}")
  );
  try {
    if (msg?.content) {
      const { hostname } = JSON.parse(msg.content.toString());
      if (!hostname)
        return console.warn(
          "[worker]: Failed to get hostname from msg content."
        );
        
    } else {
      console.log("[worker]: Failed to get msg content.");
    }
  } catch (error: any) {
    console.error("Error during insert: ", error);
  }
}

async function processKafkaEvents(hostname: string) {
    console.log(`Processing kafka events for ${hostname}`);
    return new Promise((resolve, reject)=>{
        kfConsumer.run({
            eachMessage: async ({ topic, message, partition })=>{
                const eventData = JSON.parse(message.value?.toString() || "{}");
                if(eventData.hostname == hostname){
                    console.log(`Found hostname: ${eventData.hostname}`);
                    
                    // write data to redis
                }
                resolve(null);
            }
        })
    })
}

(async () => {
  const channel = await connectRmq();
  kfConsumer = await kafkaConsumer();
  channel.consume(process.env.RMQ_ANALYTICS_QUEUE!, onMessage, {
    noAck: true,
  });
})();
