import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Admission from '@/models/Admission';
import nodemailer from 'nodemailer';

// Helper to create email transporter
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
        await connectDB();
        const admissionData = await req.json();

        // Validate required fields
        if (!admissionData.selectedCourses || admissionData.selectedCourses.length === 0) {
            return NextResponse.json({
                success: false,
                message: 'Please select at least one course',
            }, { status: 400 });
        }

        // Create new admission record
        const admission = new Admission(admissionData);
        await admission.save();

        // Send email notification (Optional)
        if (process.env.EMAIL_PASSWORD && process.env.EMAIL_USER) {
            try {
                const transporter = createTransporter();

                // Email to student/guardian
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

                // Email to admin
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
            message: 'Internal Server Error',
            error: error.message,
        }, { status: 500 });
    }
}

export async function GET() {
    try {
        await connectDB();
        const admissions = await Admission.find().sort({ submittedAt: -1 });
        return NextResponse.json({
            success: true,
            count: admissions.length,
            data: admissions,
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
