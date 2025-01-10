import { NeonClient, NeonDatabase } from "drizzle-orm/neon-serverless";

declare global {
    var db: NeonHttpDatabase<Record<string, never>> & { $client: NeonQueryFunction<any, any>; }
}