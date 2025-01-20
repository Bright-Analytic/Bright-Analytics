import { KafkaClient } from "@shared/kafka-client";

declare global {
  var kafka: KafkaClient;
}
