"use server";
import { connectDb } from "@/db";
import {
  hostnamesTable,
  usersTable,
  userUnverifiedHostnames,
  userVerifiedHostnames,
  uvHostnameTable,
} from "@/db/schema";
import { eq } from "drizzle-orm";

export async function isHostnameGloballyVerified(hostname: string) {
  await connectDb();
  const result = await global.db
    .select({
      hostname: hostnamesTable.host,
    })
    .from(userVerifiedHostnames)
    .innerJoin(
      hostnamesTable,
      eq(userVerifiedHostnames.hostnameId, hostnamesTable.id)
    )
    .where(eq(hostnamesTable.host, hostname))
    .limit(1)
    .execute();

  // If a record is found, the hostname is verified
  return result.length > 0;
}

export async function addVerifiedHostnames(
  userId: number,
  hostnameIds: number[]
) {
  const verifiedHostnames = hostnameIds.map((hostnameId) => ({
    userId,
    hostnameId,
  }));

  await global.db.insert(userVerifiedHostnames).values(verifiedHostnames);
  console.log("Verified hostnames added:", verifiedHostnames);
}

export async function addUnverifiedHostname(
  username: string,
  uvHostname: string
) {
  await connectDb();
  
  const [user] = await global.db
  .select({ username: usersTable.username, id: usersTable.id })
  .from(usersTable)
  .where(eq(usersTable.username, username))

  console.log(username, user)

  const [newHostname] = await global.db
    .insert(uvHostnameTable)
    .values({ host: uvHostname })
    .returning({ id: uvHostnameTable.id });

  if (!newHostname || !newHostname.id || !user || !user.id) {
    console.error(newHostname, user)
    throw new Error(
      `Failed to insert hostname "${uvHostname}" into uvHostnameTable`
    );
  }

  const result = await global.db.insert(userUnverifiedHostnames).values({
    userId: user.id,
    uvHostnameId: newHostname.id
  }).returning({
    id: userUnverifiedHostnames.userId
  })
  console.log("Unverified hostnames added:", result);
  return true;
}

export async function createUser(
  name: string,
  username: string,
  email: string
) {
  const newUser = await global.db
    .insert(usersTable)
    .values({
      name,
      username,
      email,
    })
    .returning();

  console.log("Created User:", newUser);
  return newUser;
}
