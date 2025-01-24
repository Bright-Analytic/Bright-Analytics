/// <reference types="@clerk/express/env" />
import Redis from "ioredis";
import { AuthObject, WebhookEvent } from "@clerk/express";
declare global {
  var redis: Redis;
  namespace Express {
    interface Request {
       evt?: WebhookEvent
    }
  }
}