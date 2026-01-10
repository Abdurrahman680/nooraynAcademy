import mongoose from 'mongoose';

const admissionSchema = new mongoose.Schema({
    studentFirstName: {
        type: String,
        required: true,
        trim: true,
    },
    studentLastName: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
    },
    contactNumber: {
        type: String,
        required: true,
    },
    dateOfBirth: {
        type: Date,
        required: true,
    },
    education: {
        type: String,
        required: true,
    },
    nationality: {
        type: String,
        required: true,
        trim: true,
    },
    language: {
        type: String,
        required: true,
        trim: true,
    },
    guardianName: {
        type: String,
        required: true,
        trim: true,
    },
    guardianContactNumber: {
        type: String,
        required: true,
    },
    whatsappNumber: {
        type: String,
        required: true,
    },
    selectedCourses: {
        type: [String],
        required: true,
    },
    submittedAt: {
        type: Date,
        default: Date.now,
    },
    status: {
        type: String,
        enum: ['pending', 'reviewed', 'approved', 'rejected'],
        default: 'pending',
    },
});

export default mongoose.models.Admission || mongoose.model('Admission', admissionSchema, 'noorayns');
