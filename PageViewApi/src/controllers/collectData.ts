import { ApiError } from "../lib/ApiError";
import { ApiResponse } from "../lib/ApiResponse";
import { asyncHandler } from "../lib/asyncHandler";

const collect = asyncHandler(async (req, res, next)=>{
    // save data to sql
    

    return res.status(200).json(new ApiResponse(200, null))
})

export {
    collect
}