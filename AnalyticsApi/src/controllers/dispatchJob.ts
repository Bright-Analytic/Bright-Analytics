import { ApiError } from "../lib/ApiError";
import { ApiResponse } from "../lib/ApiResponse";
import { asyncHandler } from "../lib/asyncHandler";
import { connectRmq } from "../lib/rabbitmq";
import { Buffer } from "buffer";

const dispatch = asyncHandler(async (req, res, next) => {
  const params = req.params;
  if(!params.hostname){
    throw new ApiError(400, "Please provide a hostname.")
  }

  const dataToQueue = Buffer.from(JSON.stringify({
    hostname: params.hostname
  }));

  const channel = await connectRmq();

  console.log(process.env.RMQ_ANALYTICS_QUEUE);

  channel.sendToQueue(
    process.env.RMQ_ANALYTICS_QUEUE || "jobs",
    dataToQueue
  );

  return res.status(200).json(new ApiResponse(200, null));
});

export { dispatch };
