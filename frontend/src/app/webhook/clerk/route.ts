import { Webhook } from "svix";
import { WebhookEvent } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import { usersTable } from "@/db/schema";
import { connectDb } from "@/db";

export async function POST(req: NextRequest) {
  const SIGNING_SECRET = process.env.SIGNING_SECRET;

  if (!SIGNING_SECRET) {
    throw new Error(
      "Error: Please add SIGNING_SECRET from Clerk Dashboard to .env or .env.local"
    );
  }

  const wh = new Webhook(SIGNING_SECRET);

  const headerPayload = await headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return NextResponse.json(
      { success: false, message: "Error: Missing Svix headers" },
      { status: 400 }
    );
  }

  const payload = await req.json();
  const body = JSON.stringify(payload);
  let evt: WebhookEvent;
  // Verify payload with headers
  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    console.error("Error: Could not verify webhook:", err);
    return NextResponse.json(
      { success: false, message: "Error: Verification error" },
      {
        status: 400,
      }
    );
  }

  const eventType = evt.type;

  console.log(
    `Received webhook with ID ${evt.data.id} and event type of ${eventType}`
  );

  if (eventType == "user.created") {
    console.log(evt.data.primary_email_address_id, evt.data.username);
    if (evt.data.primary_email_address_id && evt.data.username) {
      await connectDb();
      await global.db.insert(usersTable).values({
        name: `${evt.data.first_name} ${evt.data.last_name}`,
        email: evt.data.email_addresses.filter((value)=>(value.id == evt.data.primary_email_address_id)),
        username: evt.data.username,
      });
      return NextResponse.json(
        { success: true, message: "Webhook called successfully." },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { success: false, message: "username or email_id not found." },
        { status: 400 }
      );
    }
  }

  return NextResponse.json(
    { success: false, message: "Failed" },
    { status: 400 }
  );
}
