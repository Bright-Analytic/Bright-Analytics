import { ApiError } from "../lib/ApiError";
import { ApiResponse } from "../lib/ApiResponse";
import { asyncHandler } from "../lib/asyncHandler";

const retriveData = asyncHandler(async(req, res, next)=>{
    const params = req.params;
    if(!params.hostname){
        throw new ApiError(400, "Please provide hostname in the request params.")
    }

    

    res.status(200).json(new ApiResponse(200, null))
})

export {
    retriveData
}