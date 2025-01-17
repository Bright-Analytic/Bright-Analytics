# Bright Analytics
Bright Analytics for a smarter tomorrow.

## Environment Setup
### latest RabbitMQ 4.0.x

```shell
docker run -it --rm --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:4.0-management
```

### run kafka

```shell
docker run -d --name kafka -p 9092:9092 -e KAFKA_ZOOKEEPER_CONNECT=localhost:2181 -e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://localhost:9092 -e KAFKA_LISTENERS=PLAINTEXT://0.0.0.0:9092 wurstmeister/kafka:latest
```

### run redis stack
```shell
docker run -p 6379:6379 -it --rm redis/redis-stack-server
```

### pulsar services
```shell
docker run -it ^
-p 6650:6650 ^
-p 8080:8080 ^
--mount source=pulsardata,target=/pulsar/data ^
--mount source=pulsarconf,target=/pulsar/conf ^
apachepulsar/pulsar:3.2.4 ^
bin/pulsar standalone
```

| Micoservice Name | About                                                                                                          |
| ---------------- | -------------------------------------------------------------------------------------------------------------- |
| AnalyticsApi     | Frontend api from where you can get your realtime data.                                                        |
| MainQueue        | The main rmq worker where all the data come in queue and saved raw in the database & push events in the kafka. |
| MainScript       | It is the embedded script used in the website to send analytics data to the server.                            |
| PageViewApi      | The api where embedded script will send analytics data.                                                        |

## Here's the full system design of this project.

![system design](https://github.com/adityasharma-tech/AnalyzeCore/blob/master/assets/diagram.jpg?raw=true)

```Build a fullstack open source analytics platform & trying to make it scalable.
https://github.com/adityasharma-tech/CoreAnalytics.git tech stack: drizzle-orm, kafkajs, pulsar-client, ioredis, rabbitmq, apis.
thank you @piyushgarg_dev 'build your own' series.
It is 11th day & analytic.adityasharma.live FE is ready```