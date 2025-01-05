import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

const connectDB = async () => {
    try {
        const sql = neon(process.env.NEON_DB_URL!);
        const db = drizzle(sql);
        return db;
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

export default connectDB