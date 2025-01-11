import { drizzle } from "drizzle-orm/neon-http";
import { NeonQueryFunction } from "@neondatabase/serverless";
import { NeonHttpDatabase } from "drizzle-orm/neon-http";

export class DrizzleDb {
  private url: string;
  public db?: NeonHttpDatabase<Record<string, never>> & {
    $client: NeonQueryFunction<any, any>;
  };

  constructor(url: string) {
    this.url = url;
    this.loadDatabase();
  }

  private loadDatabase() {
    this.db = drizzle(this.url);
  }
}
