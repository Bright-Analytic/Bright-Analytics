import { config } from "dotenv";
import { defineConfig } from "drizzle-kit";

config({ path: "../../.env" });

export default defineConfig({
  schema: "./src/schemas/index.ts",
  out: "./migrations",
  dialect: "postgresql",
  dbCredentials: {
    ssl: {
      ca: process.env.POSTGRES_CA_CERT!,
      rejectUnauthorized: true,
    },
    database: "defaultdb",
    host: process.env.PG_HOST!,
    password: process.env.PG_PASS!,
    user: process.env.PG_USER!,
    port: +process.env.PG_PORT!
  },
});
