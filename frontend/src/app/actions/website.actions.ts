"use server";
import {
  hostnamesTable,
  usersTable,
  userUnverifiedHostnames,
  userVerifiedHostnames,
} from "@/db/schema";
import { eq } from "drizzle-orm";

async function isHostnameGloballyVerified(hostname: string) {
  const result = await db
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

  await db.insert(userVerifiedHostnames).values(verifiedHostnames);
  console.log("Verified hostnames added:", verifiedHostnames);
}

export async function addUnverifiedHostnames(
  userId: number,
  uvHostnameIds: number[]
) {
  const unverifiedHostnames = uvHostnameIds.map((uvHostnameId) => ({
    userId,
    uvHostnameId,
  }));

  await db.insert(userUnverifiedHostnames).values(unverifiedHostnames);
  console.log("Unverified hostnames added:", unverifiedHostnames);
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
