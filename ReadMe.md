# AnalyzeCore

### Core analytics for a smarter tomorrow.

## latest RabbitMQ 4.0.x
```shell
docker run -it --rm --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:4.0-management
```

## run kafka
```shell
docker run -d --name kafka -p 9092:9092 -e KAFKA_ZOOKEEPER_CONNECT=localhost:2181 -e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://localhost:9092 -e KAFKA_LISTENERS=PLAINTEXT://0.0.0.0:9092 wurstmeister/kafka:latest
```

## Here's the full system design of this project.
![system design](https://github.com/adityasharma-tech/AnalyzeCore/blob/main/assets/diagram.png?raw=true)