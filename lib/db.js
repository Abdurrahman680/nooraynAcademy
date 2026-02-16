import { Pool } from 'pg';

// Lazy pool initialization for Vercel serverless compatibility
let pool;

export function getPool() {
    if (!pool) {
        let connectionString = process.env.NEON_DATABASE_URL;
        // Remove channel_binding parameter which can cause issues on serverless
        if (connectionString) {
            connectionString = connectionString.replace(/[&?]channel_binding=require/g, '');
        }
        pool = new Pool({
            connectionString,
            ssl: { rejectUnauthorized: false },
            max: 5, // limit connections for serverless
        });
    }
    return pool;
}
