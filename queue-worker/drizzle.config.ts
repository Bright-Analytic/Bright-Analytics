import dotenv from 'dotenv';
dotenv.config({
  path: "../.env"
})
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  out: './drizzle',
  schema: './src/db/schema.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.NEON_DB_URL!,
  },
});