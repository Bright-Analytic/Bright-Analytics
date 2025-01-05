import { ApiError } from "../lib/ApiError";
import { ApiResponse } from "../lib/ApiResponse";
import { asyncHandler } from "../lib/asyncHandler";
import { redisClient } from "../lib/redis";

const retriveData = asyncHandler(async(req, res, next)=>{
    const query = req.query;
    if(!query.hostname){
        throw new ApiError(400, "Please provide hostname in the request query.")
    }

    if(!global.redis) await redisClient();

    const result = await global.redis.keys(`${query.hostname}:*`)
    console.log(result)

    res.status(200).json(new ApiResponse(200, result))
})

export {
    retriveData
}