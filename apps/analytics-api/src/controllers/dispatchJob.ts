import { RabbitMq } from "@shared/rabbitmq-client";
import { ApiError } from "../lib/ApiError";
import { ApiResponse } from "../lib/ApiResponse";
import { asyncHandler } from "../lib/asyncHandler";
import { Buffer } from "buffer";

const dispatch = asyncHandler(async (req, res, next) => {
  const query = req.query;
  if (!query.hostname) {
    throw new ApiError(400, "Please provide a hostname.");
  }

  const dataToQueue = Buffer.from(
    JSON.stringify({
      hostname: query.hostname,
    }),
  );

  const rmq = new RabbitMq(
    process.env.RMQ_HOST!,
    process.env.RMQ_PORT!,
    process.env.RMQ_USERNAME!,
    process.env.RMQ_PASSWORD!,
  );
  await rmq.connectRmq();
  await rmq.loadChannel(process.env.RMQ_ANALYTICS_QUEUE!, {
    durable: true,
  });
  if(rmq.channel)
  await rmq.channel.sendToQueue(process.env.RMQ_ANALYTICS_QUEUE!, dataToQueue);

  return res.status(200).json(new ApiResponse(200, null));
});

export { dispatch };
