import {
  drizzle,
  NodePgClient,
  NodePgDatabase,
} from "drizzle-orm/node-postgres";
import { Pool } from "pg";
export class DrizzleDb {
  public db: NodePgDatabase<Record<string, never>> & { $client: NodePgClient };

  constructor(database: string = "defaultdb", replicadb = false) {
    if (!process.env.POSTGRES_CA_CERT)
      throw new Error("Ca certificate required for connection to db.");
    const pool = new Pool({
      ssl: {
        ca: process.env.POSTGRES_CA_CERT!,
        rejectUnauthorized: true,
      },
      database,
      host: replicadb ? `replica-${process.env.PG_HOST}` : process.env.PG_HOST!,
      password: process.env.PG_PASS!,
      user: process.env.PG_USER!,
      port: +process.env.PG_PORT!,
    });
    this.db = drizzle({ client: pool });
  }
}
