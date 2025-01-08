import { NeonClient, NeonDatabase } from "drizzle-orm/neon-serverless";

declare global {
    var db: NeonDatabase<Record<string, never>> & {
        $client: NeonClient;
    }
}