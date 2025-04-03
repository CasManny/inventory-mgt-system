import { Webhook } from "svix";
import { headers } from "next/headers";
import { WebhookEvent } from "@clerk/nextjs/server";
import { db } from "@/db";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function POST(req: Request) {
  const SIGNING_SECRET = process.env.SIGNING_SECRET;

  if (!SIGNING_SECRET) {
    throw new Error(
      "Error: Please add SIGNING_SECRET from Clerk Dashboard to .env"
    );
  }

  // Create Svix instance
  const wh = new Webhook(SIGNING_SECRET);

  // Get headers
  const headerPayload = await headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response("Error: Missing Svix headers", { status: 400 });
  }

  // Parse and verify body
  const payload = await req.json();
  const body = JSON.stringify(payload);

  let evt: WebhookEvent;
  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    console.error("Error: Could not verify webhook:", err);
    return new Response("Error: Verification error", { status: 400 });
  }

  // Extract event type and handle accordingly
  const eventType = evt.type;
  try {
    switch (eventType) {
      case "user.created": {
        const { id, first_name, last_name, image_url, email_addresses } =
          evt.data;
        await db.insert(users).values({
          clerkId: id,
          name: `${first_name} ${last_name}`,
          imageUrl: image_url,
          email: email_addresses[0].email_address,
        });
        break;
      }
      case "user.updated": {
        const { id, first_name, last_name, image_url, email_addresses } =
          evt.data;
        await db
          .update(users)
          .set({
            name: `${first_name} ${last_name}`,
            imageUrl: image_url,
            email: email_addresses[0].email_address,
          })
          .where(eq(users.clerkId, id));
        break;
      }
      case "user.deleted": {
        const { id } = evt.data;
        await db.delete(users).where(eq(users.clerkId, id!));
        break;
      }
      default:
        console.log(`Unhandled event type: ${eventType}`);
    }
  } catch (error) {
    console.error(`Database operation failed: ${error}`);
    return new Response("Error: Database operation failed", { status: 500 });
  }

  return new Response("Webhook received", { status: 200 });
}
