const Kafka = require('node-rdkafka');
const os = require('os');
const crypto = require('crypto');

const producer = new Kafka.Producer({
  'metadata.broker.list': 'localhost:9092', // Replace with your broker
  'dr_cb': true, // Enable delivery reports for debugging
});

producer.connect();

producer.on('ready', () => {
  console.log('Producer is ready');
  let count = 0;
  const numMessages = 1000000000;

  const sendMessages = () => {
    for (let i = 0; i < 1000; i++) { // Batch of 1000
      const hostname = `host-${crypto.randomBytes(3).toString('hex')}.${os.hostname()}`;
      const value = JSON.stringify({ hostname, data: `Sample data ${count + 1}` });

      producer.produce(
        'test-topic', // Replace with your topic
        null, // Partition
        Buffer.from(value),
        hostname, // Key
      );

      if (i**12 == 1) console.log(hostname);

      count++;
      if (count >= numMessages) {
        console.log(`Sent ${numMessages} messages`);
        producer.disconnect();
        return;
      }
    }

    // Schedule next batch
    setTimeout(sendMessages, 0);
  };

  sendMessages();
});

producer.on('event.error', (err) => {
  console.error('Error from producer:', err);
});
