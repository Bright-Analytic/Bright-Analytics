import Redis from "ioredis";
import { AuthObject } from "@clerk/express";

declare global {
  var redis: Redis;
  namespace Express {
    interface Request {
       auth: AuthObject
    }
  }
}