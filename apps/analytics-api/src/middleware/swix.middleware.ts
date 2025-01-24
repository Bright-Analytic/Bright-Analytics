import { Webhook } from "svix";
import { ApiError } from "../lib/ApiError";
import { asyncHandler } from "../lib/asyncHandler";
import { WebhookEvent } from "@clerk/express";

export const svixMiddleware = asyncHandler(async (req, res, next) => {
  try {
    const SIGNING_SECRET = process.env.SIGNING_SECRET;

    if (!SIGNING_SECRET) {
      throw new Error(
        "Error: Please add SIGNING_SECRET from Clerk Dashboard to .env or .env.local"
      );
    }

    const wh = new Webhook(SIGNING_SECRET);

    const headerPayload = req.headers;
    const svix_id = headerPayload["svix-id"];
    const svix_timestamp = headerPayload["svix-timestamp"];
    const svix_signature = headerPayload["svix-signature"];

    // If there are no headers, error out
    if (!svix_id || !svix_timestamp || !svix_signature) {
      throw new ApiError(401, "Unauthorized: Failed to get svix headers.");
    }

    let evt: WebhookEvent;
    // Verify payload with headers
    try {
      evt = wh.verify(JSON.stringify(req.body), {
        "svix-id": svix_id.toString(),
        "svix-timestamp": svix_timestamp.toString(),
        "svix-signature": svix_signature.toString()
      }) as WebhookEvent;
    } catch (err: any) {
        throw new ApiError(401, err.message ?? "Unauthorized: Failed to verify webhook.");
    }
    req.evt = evt;
    next();
  } catch (error: any) {
    throw new ApiError(401, error.message ?? "Unauthorized");
  }
});
