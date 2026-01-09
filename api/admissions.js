const connectDB = require('../server/config/database');
const Admission = require('../server/models/Admission');
const nodemailer = require('nodemailer');

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

export default async function handler(req, res) {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    );

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    try {
        await connectDB();

        if (req.method === 'POST') {
            const admissionData = req.body;

            // Validate required fields
            if (!admissionData.selectedCourses || admissionData.selectedCourses.length === 0) {
                return res.status(400).json({
                    success: false,
                    message: 'Please select at least one course',
                });
            }

            // Create new admission record
            const admission = new Admission(admissionData);
            await admission.save();

            // Send email notification
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
                    to: process.env.ADMIN_EMAIL,
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

            return res.status(201).json({
                success: true,
                message: 'Application submitted successfully!',
                data: admission,
            });
        }

        if (req.method === 'GET') {
            const admissions = await Admission.find().sort({ submittedAt: -1 });
            return res.status(200).json({
                success: true,
                count: admissions.length,
                data: admissions,
            });
        }

        return res.status(405).json({ success: false, message: 'Method not allowed' });
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({
            success: false,
            message: 'Internal Server Error',
            error: error.message,
        });
    }
}
