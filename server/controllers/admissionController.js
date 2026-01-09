const Admission = require('../models/Admission');
const nodemailer = require('nodemailer');

// Create email transporter
const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail', // You can change this to your email service
    auth: {
      user: process.env.EMAIL_USER || 'your-email@gmail.com',
      pass: process.env.EMAIL_PASSWORD || 'your-app-password',
    },
  });
};

// Submit admission form
exports.submitAdmission = async (req, res) => {
  try {
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

    // Send email notification (Optional)
    if (process.env.EMAIL_PASSWORD && process.env.EMAIL_USER) {
      try {
        const transporter = createTransporter();

        // Email to student/guardian
        const studentEmailOptions = {
          from: process.env.EMAIL_USER || 'noorayn@academy.com',
          to: admissionData.email,
          subject: 'Welcome to Noorayn Academy - Application Received',
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <div style="background: linear-gradient(135deg, #10b981, #eab308); padding: 30px; text-align: center;">
                <h1 style="color: white; margin: 0;">Noorayn Academy</h1>
                <p style="color: white; margin: 10px 0 0 0;">Illuminating Hearts Through Quranic Knowledge</p>
              </div>
              
              <div style="padding: 30px; background-color: #f9fafb;">
                <h2 style="color: #065f46;">Assalamu Alaikum ${admissionData.studentFirstName}!</h2>
                
                <p style="color: #374151; line-height: 1.6;">
                  Thank you for choosing Noorayn Academy for your Quranic education journey. 
                  We have successfully received your application.
                </p>
                
                <div style="background-color: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
                  <h3 style="color: #065f46; margin-top: 0;">Application Details:</h3>
                  <p><strong>Student Name:</strong> ${admissionData.studentFirstName} ${admissionData.studentLastName}</p>
                  <p><strong>Nationality:</strong> ${admissionData.nationality}</p>
                  <p><strong>Language:</strong> ${admissionData.language}</p>
                  <p><strong>Email:</strong> ${admissionData.email}</p>
                  <p><strong>Selected Courses:</strong></p>
                  <ul>
                    ${admissionData.selectedCourses.map(course => `<li>${course}</li>`).join('')}
                  </ul>
                </div>
                
                <p style="color: #374151; line-height: 1.6;">
                  Our team will review your application and contact you within 24-48 hours via email and WhatsApp
                  to discuss the next steps and schedule your first class.
                </p>
                
                <p style="color: #374151; line-height: 1.6;">
                  If you have any questions, feel free to reach out to us:
                </p>
                <ul style="color: #374151;">
                  <li>📧 Email: itsnoorayn@gmail.com</li>
                  <li>📱 WhatsApp: +92 330 9316883</li>
                  <li>📱 WhatsApp: +92 329 5209043</li>
                </ul>
                
                <div style="margin-top: 30px; padding-top: 20px; border-top: 2px solid #e5e7eb;">
                  <p style="color: #6b7280; font-style: italic; margin: 0;">
                    "خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ"<br>
                    "The best among you are those who learn the Quran and teach it."<br>
                    - Prophet Muhammad ﷺ
                  </p>
                </div>
              </div>
              
              <div style="background-color: #065f46; padding: 20px; text-align: center;">
                <p style="color: white; margin: 0; font-size: 14px;">
                  © 2026 Noorayn Academy. All rights reserved.
                </p>
              </div>
            </div>
          `,
        };

        // Email to admin
        const adminEmailOptions = {
          from: process.env.EMAIL_USER || 'noorayn@academy.com',
          to: process.env.ADMIN_EMAIL || 'admin@nooraynacademy.com',
          subject: 'New Admission Application Received',
          html: `
            <h2>New Admission Application</h2>
            <p><strong>Student:</strong> ${admissionData.studentFirstName} ${admissionData.studentLastName}</p>
            <p><strong>Email:</strong> ${admissionData.email}</p>
            <p><strong>Contact:</strong> ${admissionData.contactNumber}</p>
            <p><strong>WhatsApp:</strong> ${admissionData.whatsappNumber}</p>
            <p><strong>Guardian:</strong> ${admissionData.guardianName}</p>
            <p><strong>Guardian Contact:</strong> ${admissionData.guardianContactNumber}</p>
            <p><strong>Date of Birth:</strong> ${new Date(admissionData.dateOfBirth).toLocaleDateString()}</p>
            <p><strong>Nationality:</strong> ${admissionData.nationality}</p>
            <p><strong>Language:</strong> ${admissionData.language}</p>
            <p><strong>Education:</strong> ${admissionData.education}</p>
            <p><strong>Selected Courses:</strong></p>
            <ul>
              ${admissionData.selectedCourses.map(course => `<li>${course}</li>`).join('')}
            </ul>
            <p><strong>Submitted At:</strong> ${new Date().toLocaleString()}</p>
          `,
        };

        await transporter.sendMail(studentEmailOptions);
        await transporter.sendMail(adminEmailOptions);

        console.log('✅ Emails sent successfully');
      } catch (emailError) {
        console.error('⚠️ Email sending error:', emailError.message);
      }
    } else {
      console.log('ℹ️ Email notification skipped: EMAIL_PASSWORD not configured.');
    }

    res.status(201).json({
      success: true,
      message: 'Application submitted successfully! We will contact you soon.',
      data: admission,
    });
  } catch (error) {
    console.error('Error submitting admission:', error);
    res.status(500).json({
      success: false,
      message: 'Error submitting application. Please try again.',
      error: error.message,
    });
  }
};

// Get all admissions (for admin panel - future feature)
exports.getAllAdmissions = async (req, res) => {
  try {
    const admissions = await Admission.find().sort({ submittedAt: -1 });
    res.status(200).json({
      success: true,
      count: admissions.length,
      data: admissions,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching admissions',
      error: error.message,
    });
  }
};
