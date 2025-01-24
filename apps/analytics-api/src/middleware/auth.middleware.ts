import { ApiError } from "../lib/ApiError";
import { asyncHandler } from "../lib/asyncHandler";
import auth from 'basic-auth';

const check = function(username: string, password: string){
    let valid = false;

    valid = username.trim() == process.env.ANALYTICS_API_USERNAME!
    valid = password.trim() == process.env.ANALYTICS_API_PASSWORD!
    
    return valid;
}

export const authMiddleware = asyncHandler((req, res, next)=>{
    var credentials = auth(req)

    if(!credentials || !check(credentials.name, credentials.pass))
        throw new ApiError(401, "Unauthorized");

    next();
}) 