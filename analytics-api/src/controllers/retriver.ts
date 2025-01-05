import { ApiError } from "../lib/ApiError";
import { ApiResponse } from "../lib/ApiResponse";
import { asyncHandler } from "../lib/asyncHandler";
import { redisClient } from "../lib/redis";

const retriveData = asyncHandler(async (req, res, next) => {
  const query = req.query;
  if (!query.hostname) {
    throw new ApiError(400, "Please provide hostname in the request query.");
  }

  if (!global.redis) await redisClient();

  const zsetKey = `timestamps:${query.hostname}`;
  const now = new Date();
  now.setDate(now.getDate() - 1);

  const keys = await global.redis.zrangebyscore(
    zsetKey,
    Math.floor(now.getTime() / 1000),
    Date.now().toString()
  );

  const results = [];
  for (const key of keys) {
    const data = await global.redis.hgetall(key.toString());
    results.push(data);
  }

  res.status(200).json(new ApiResponse(200, {
    data: results
  }));
});

export { retriveData };
