import { RedisClient } from "@shared/redis-client";
import { ApiError } from "../lib/ApiError";
import { ApiResponse } from "../lib/ApiResponse";
import { asyncHandler } from "../lib/asyncHandler";

const dispatch = asyncHandler(async (req, res, next) => {
  let hostname = req.params.hostname;
  if (!hostname || hostname.trim() == '') {
    throw new ApiError(400, "Please provide a hostname.");
  }
  hostname = hostname.trim();
  const { from, till } = req.query;

  if(!from || !till || from.toString().trim() == "" || till.toString().trim()) throw new ApiError(400, "from & till should be valid date.");
  const nFrom:number = +from.toString().trim();
  const nTill:number = +till.toString().trim();
  
  const redisClient = new RedisClient();
  await redisClient.connect()

  const data = await redisClient.redis.get(`${hostname}:${nFrom}-${nTill}`)

  if(data) return res.status(200).json(new ApiResponse(200, {
    
  }))
  return res.status(200).json(new ApiResponse(200, null));
});

export { dispatch };
