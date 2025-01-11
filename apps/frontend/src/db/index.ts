import { drizzle } from "drizzle-orm/neon-http";

async function connectDb() {
  try {
    const db = drizzle(process.env.DATABASE_URL!);
    global.db = db;
  } catch (error: any) {
    console.error(
      `Error occured during loading database: ${error.message}\n`,
      error,
    );
    process.exit(1);
  }
}

export { connectDb };
