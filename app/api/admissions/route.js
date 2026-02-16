import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { Pool } from 'pg';

export const dynamic = 'force-dynamic';

const pool = new Pool({
    connectionString: process.env.NEON_DATABASE_URL,
    ssl: { rejectUnauthorized: false },
});

const createTransporter = () => {
    return nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD,
        },
    });
};

export async function POST(req) {
    try {
        const admissionData = await req.json();

        if (!admissionData.selectedCourses || admissionData.selectedCourses.length === 0) {
            return NextResponse.json({
                success: false,
                message: 'Please select at least one course',
            }, { status: 400 });
        }

        if (!process.env.NEON_DATABASE_URL) {
            throw new Error('NEON_DATABASE_URL environment variable is not configured');
        }

        await pool.query(`
            CREATE TABLE IF NOT EXISTS admissions (
                id SERIAL PRIMARY KEY,
                student_first_name TEXT NOT NULL,
                student_last_name TEXT NOT NULL,
                email TEXT NOT NULL,
                contact_number TEXT NOT NULL,
                date_of_birth DATE NOT NULL,
                education TEXT NOT NULL,
                nationality TEXT NOT NULL,
                language TEXT NOT NULL,
                guardian_name TEXT NOT NULL,
                guardian_contact_number TEXT NOT NULL,
                whatsapp_number TEXT NOT NULL,
                selected_courses TEXT[] NOT NULL,
                submitted_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
                status TEXT NOT NULL DEFAULT 'pending'
            )
        `);

        const insertResult = await pool.query(
            `
            INSERT INTO admissions (
                student_first_name,
                student_last_name,
                email,
                contact_number,
                date_of_birth,
                education,
                nationality,
                language,
                guardian_name,
                guardian_contact_number,
                whatsapp_number,
                selected_courses,
                status
            ) VALUES (
                $1,
                $2,
                $3,
                $4,
                $5,
                $6,
                $7,
                $8,
                $9,
                $10,
                $11,
                $12,
                $13
            )
            RETURNING *
        `,
            [
                admissionData.studentFirstName,
                admissionData.studentLastName,
                admissionData.email,
                admissionData.contactNumber,
                admissionData.dateOfBirth,
                admissionData.education,
                admissionData.nationality,
                admissionData.language,
                admissionData.guardianName,
                admissionData.guardianContactNumber,
                admissionData.whatsappNumber,
                admissionData.selectedCourses,
                'pending',
            ]
        );

        const admission = insertResult.rows[0];

        if (process.env.EMAIL_PASSWORD && process.env.EMAIL_USER) {
            try {
                const transporter = createTransporter();

                const studentEmailOptions = {
                    from: process.env.EMAIL_USER,
                    to: admissionData.email,
                    subject: 'Welcome to Noorayn Academy - Application Received',
                    html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                  <div style="background: linear-gradient(135deg, #10b981, #eab308); padding: 30px; text-align: center;">
                    <h1 style="color: white; margin: 0;">Noorayn Academy</h1>
                  </div>
                  <div style="padding: 30px; background-color: #f9fafb;">
                    <h2 style="color: #065f46;">Assalamu Alaikum ${admissionData.studentFirstName}!</h2>
                    <p>Thank you for choosing Noorayn Academy. We have successfully received your application.</p>
                    <div style="background-color: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
                      <p><strong>Student Name:</strong> ${admissionData.studentFirstName} ${admissionData.studentLastName}</p>
                      <p><strong>Nationality:</strong> ${admissionData.nationality}</p>
                      <p><strong>Language:</strong> ${admissionData.language}</p>
                      <p><strong>Selected Courses:</strong> ${admissionData.selectedCourses.join(', ')}</p>
                    </div>
                    <p>Our team will contact you within 24-48 hours via WhatsApp/Email.</p>
                    <ul style="color: #374151;">
                      <li>📧 Email: itsnoorayn@gmail.com</li>
                      <li>📱 WhatsApp: +92 330 9316883, +92 329 5209043</li>
                    </ul>
                  </div>
                </div>
              `,
                };

                const adminEmailOptions = {
                    from: process.env.EMAIL_USER,
                    to: admissionData.adminEmail || process.env.ADMIN_EMAIL,
                    subject: 'New Admission Application Received',
                    html: `
                <h2>New Admission Application</h2>
                <p><strong>Student:</strong> ${admissionData.studentFirstName} ${admissionData.studentLastName}</p>
                <p><strong>Email:</strong> ${admissionData.email}</p>
                <p><strong>WhatsApp:</strong> ${admissionData.whatsappNumber}</p>
                <p><strong>Nationality:</strong> ${admissionData.nationality}</p>
                <p><strong>Language:</strong> ${admissionData.language}</p>
                <p><strong>Selected Courses:</strong> ${admissionData.selectedCourses.join(', ')}</p>
              `,
                };

                await transporter.sendMail(studentEmailOptions);
                await transporter.sendMail(adminEmailOptions);
            } catch (emailError) {
                console.error('⚠️ Email sending error:', emailError.message);
            }
        }

        return NextResponse.json({
            success: true,
            message: 'Application submitted successfully!',
            data: admission,
        }, { status: 201 });
    } catch (error) {
        console.error('Error in POST /api/admissions:', error);
        return NextResponse.json({
            success: false,
            message: error.message || 'Internal Server Error',
        }, { status: 500 });
    }
}

export async function GET() {
    try {
        if (!process.env.NEON_DATABASE_URL) {
            throw new Error('NEON_DATABASE_URL environment variable is not configured');
        }

        const result = await pool.query(
            'SELECT * FROM admissions ORDER BY submitted_at DESC'
        );

        return NextResponse.json({
            success: true,
            count: result.rowCount,
            data: result.rows,
        }, { status: 200 });
    } catch (error) {
        console.error('Error in GET /api/admissions:', error);
        return NextResponse.json({
            success: false,
            message: 'Internal Server Error',
            error: error.message,
        }, { status: 500 });
    }
}
