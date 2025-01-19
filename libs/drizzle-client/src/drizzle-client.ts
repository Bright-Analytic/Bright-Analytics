import { drizzle, NodePgClient, NodePgDatabase } from 'drizzle-orm/node-postgres';

export class DrizzleDb {
  public db: NodePgDatabase<Record<string, never>> & { $client: NodePgClient; }

  constructor(url: string = process.env.DATABASE_URL!) {
    this.db = drizzle(url);
  }
}
