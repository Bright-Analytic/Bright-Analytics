import { NeonQueryFunction } from "@neondatabase/serverless";
import { NeonHttpDatabase } from "drizzle-orm/neon-http";

declare global {
  var db: NeonHttpDatabase<Record<string, never>> & {
    $client: NeonQueryFunction<any, any>;
  };
}
