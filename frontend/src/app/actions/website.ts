"use server";
import { neon } from "@neondatabase/serverless";

export async function fetchVerifiedHostname(hostname: string) {
    // check weather if user already has hostname or not
    const sql = neon(process.env.DATABASE_URL!);
    const data = await sql`SELECT * FROM verified_hostnames WHERE hostname = ${hostname}`;
    return data;
}