import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';

export const dynamic = 'force-dynamic';

export async function GET() {
    try {
        await connectDB();
        return NextResponse.json({ 
            status: 'ok', 
            message: 'Database connection successful' 
        }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ 
            status: 'error', 
            message: 'Database connection failed',
            error: error.message 
        }, { status: 500 });
    }
}
