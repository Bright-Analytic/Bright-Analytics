import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-serverless';

async function connectDb() {
    try {
        const sql = neon(process.env.DATABASE_URL!);
        //@ts-ignore
        const db = drizzle({ client: sql });
        global.db = db;
    } catch (error: any) {
        console.error(`Error occured during loading database: ${error.message}\n`, error);
        process.exit(1);
    }
}

export {
    connectDb
}