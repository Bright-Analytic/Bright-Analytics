# Core Analytics
Core Analytics for a smarter tomorrow.

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

| Micoservice Name | About                                                                                                          |
| ---------------- | -------------------------------------------------------------------------------------------------------------- |
| AnalyticsApi     | Frontend api from where you can get your realtime data.                                                        |
| MainQueue        | The main rmq worker where all the data come in queue and saved raw in the database & push events in the kafka. |
| MainScript       | It is the embedded script used in the website to send analytics data to the server.                            |
| PageViewApi      | The api where embedded script will send analytics data.                                                        |

## Here's the full system design of this project.

![system design](https://github.com/adityasharma-tech/AnalyzeCore/blob/master/assets/diagram.jpg?raw=true)

