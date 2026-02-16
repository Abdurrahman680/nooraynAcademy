import { NextResponse } from 'next/server';
import { getPool } from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function GET() {
    try {
        const pool = getPool();
        await pool.query('SELECT 1');
        return NextResponse.json({
            status: 'ok',
            message: 'Database connection successful (Neon Postgres)'
        }, { status: 200 });
    } catch (error) {
        return NextResponse.json({
            status: 'error',
            message: 'Database connection failed',
            error: error.message
        }, { status: 500 });
    }
}
