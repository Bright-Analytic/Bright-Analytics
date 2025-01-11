import { drizzle } from "drizzle-orm/neon-http";

const connectDB = async () => {
  try {
    const db = drizzle(process.env.NEON_DB_URL!);
    return db;
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectDB;
