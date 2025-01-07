import Pulsar from 'pulsar-client'

let client: Pulsar.Client;
let consumer: Pulsar.Consumer;

const pulsarConsumer = async ()=>{
    if(client && consumer) return { client, consumer }
    const hostname = process.env.PULSAR_HOSTNAME!
    const port = process.env.PULSAR_PORT!
    try {
        client = new Pulsar.Client({
            serviceUrl: `pulsar://${hostname}:${port}`
        });

        consumer = await client.subscribe({
            topic: 'persistent://public/default/event-streams',
            subscription: 'sub1',
        });

        return {client, consumer};
    } catch (error) {
        console.error(`Error during connecting to pulsar: `, error)
        process.exit(1)
    }
}

export {
    pulsarConsumer
}