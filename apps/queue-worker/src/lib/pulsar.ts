import Pulsar from "pulsar-client";

const pulsarProducer = async () => {
  const hostname = process.env.PULSAR_HOSTNAME!;
  const port = process.env.PULSAR_PORT!;
  try {
    const client = new Pulsar.Client({
      serviceUrl: `pulsar://${hostname}:${port}`,
    });

    const producer = await client.createProducer({
      topic: "persistent://public/default/event-streams",
      sendTimeoutMs: 10000,
    });

    return producer;
  } catch (error) {
    console.error(`Error during connecting to pulsar: `, error);
    process.exit(1);
  }
};

export { pulsarProducer };
