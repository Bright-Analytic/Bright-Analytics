import { Webhook } from "svix";
import { WebhookEvent } from "@clerk/nextjs/server";
import { NextRequest, NextResponse, userAgent } from "next/server";
import { headers } from "next/headers";
import { schemas, DrizzleDb } from "@shared/drizzle-client";
import { eq } from "drizzle-orm";

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

  const dClient = new DrizzleDb(process.env.DATABASE_URL!);

  if (eventType == "user.created") {
    console.log(evt.data.primary_email_address_id, evt.data.username);
    if (evt.data.primary_email_address_id && evt.data.username) {
      await dClient.db.insert(schemas.usersTable).values({
        first_name: evt.data.first_name ?? "",
        last_name: evt.data.last_name ?? "",
        email: evt.data.email_addresses.filter(
          (value) => value.id == evt.data.primary_email_address_id
        )[0].email_address,
        username: evt.data.username,
        clerk_uid: evt.data.id,
        created_at: new Date(),
        updated_at: new Date(),
      });
      return NextResponse.json(
        { success: true, message: "user created successfully." },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { success: false, message: "username or email_id not found." },
        { status: 400 }
      );
    }
  } else if (eventType == "user.updated") {
    await dClient.db
      .update(schemas.usersTable)
      .set({
        first_name: evt.data.first_name ?? "",
        last_name: evt.data.last_name ?? "",
        email: evt.data.email_addresses.filter(
          (value) => value.id == evt.data.primary_email_address_id
        )[0].email_address,
        username: evt.data.username ?? "",
        updated_at: new Date(),
      })
      .where(eq(schemas.usersTable.clerk_uid, evt.data.id));
    return NextResponse.json(
      { success: true, message: "user updated successfully." },
      { status: 200 }
    );
  } else if (eventType == "user.deleted") {
    await dClient.db
      .delete(schemas.usersTable)
      .where(eq(schemas.usersTable.clerk_uid, evt.data.id ?? ""));
    return NextResponse.json(
      { success: true, message: "user deleted successfully." },
      { status: 200 }
    );
  }

  return NextResponse.json(
    { success: false, message: "Failed" },
    { status: 400 }
  );
}
