'use client';
import { useState } from 'react';
import axios from 'axios';

const AdmissionForm = () => {
    const [formData, setFormData] = useState({
        studentFirstName: '',
        studentLastName: '',
        email: '',
        contactNumber: '',
        dateOfBirth: '',
        education: '',
        nationality: '',
        language: '',
        guardianName: '',
        guardianContactNumber: '',
        whatsappNumber: '',
        selectedCourses: [],
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState('');
    const [messageType, setMessageType] = useState(''); // 'success' or 'error'

    const courses = [
        'Hifz-ul-Quran',
        'Nazra Quran',
        'Tajweed-ul-Quran',
        'Special Surahs & Last 10 Surahs',
        'Surah Rehman',
        'Learn Duas',
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleCourseChange = (e) => {
        const { value, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            selectedCourses: checked
                ? [...prev.selectedCourses, value]
                : prev.selectedCourses.filter((course) => course !== value),
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitMessage('');

        // Validation
        if (formData.selectedCourses.length === 0) {
            setSubmitMessage('Please select at least one course');
            setMessageType('error');
            setIsSubmitting(false);
            return;
        }

        try {
            const response = await axios.post('/api/admissions', formData);

            setSubmitMessage('🎉 Application submitted successfully! We will contact you soon via email and WhatsApp.');
            setMessageType('success');

            // Reset form
            setFormData({
                studentFirstName: '',
                studentLastName: '',
                email: '',
                contactNumber: '',
                dateOfBirth: '',
                education: '',
                nationality: '',
                language: '',
                guardianName: '',
                guardianContactNumber: '',
                whatsappNumber: '',
                selectedCourses: [],
            });
        } catch (error) {
            console.error('Error submitting admission:', error);
            const errorMessage = error.response?.data?.message || error.message || 'Please try again or contact us directly.';
            setSubmitMessage(`❌ Error: ${errorMessage}`);
            setMessageType('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="admission" className="py-20 bg-gradient-to-br from-primary-50 to-gold-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="section-title">Admission Form</h2>
                    <div className="w-24 h-1 bg-gold-500 mx-auto mt-4"></div>
                    <p className="text-lg text-gray-600 mt-4">
                        Start your Quranic journey today! Fill out the form below to enroll.
                    </p>
                </div>

                <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Student Information */}
                        <div>
                            <h3 className="text-2xl font-bold text-primary-800 mb-4 flex items-center">
                                <span className="mr-2">👤</span> Student Information
                            </h3>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-gray-700 font-semibold mb-2">
                                        First Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="studentFirstName"
                                        value={formData.studentFirstName}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                        placeholder="Enter first name"
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-700 font-semibold mb-2">
                                        Last Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="studentLastName"
                                        value={formData.studentLastName}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                        placeholder="Enter last name"
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-700 font-semibold mb-2">
                                        Date of Birth <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="date"
                                        name="dateOfBirth"
                                        value={formData.dateOfBirth}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-700 font-semibold mb-2">
                                        Education Level <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        name="education"
                                        value={formData.education}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                    >
                                        <option value="">Select education level</option>
                                        <option value="Primary School">Primary School</option>
                                        <option value="Middle School">Middle School</option>
                                        <option value="High School">High School</option>
                                        <option value="Bachelor's Degree">Bachelor's Degree</option>
                                        <option value="Master's Degree">Master's Degree</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-gray-700 font-semibold mb-2">
                                        Nationality <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="nationality"
                                        value={formData.nationality}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                        placeholder="Enter nationality"
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-700 font-semibold mb-2">
                                        Language <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="language"
                                        value={formData.language}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                        placeholder="Enter primary language"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Contact Information */}
                        <div>
                            <h3 className="text-2xl font-bold text-primary-800 mb-4 flex items-center">
                                <span className="mr-2">📞</span> Contact Information
                            </h3>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-gray-700 font-semibold mb-2">
                                        Email Address <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                        placeholder="your.email@example.com"
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-700 font-semibold mb-2">
                                        Contact Number <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="tel"
                                        name="contactNumber"
                                        value={formData.contactNumber}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                        placeholder="+1 234 567 8900"
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-700 font-semibold mb-2">
                                        WhatsApp Number <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="tel"
                                        name="whatsappNumber"
                                        value={formData.whatsappNumber}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                        placeholder="+1 234 567 8900"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Guardian Information */}
                        <div>
                            <h3 className="text-2xl font-bold text-primary-800 mb-4 flex items-center">
                                <span className="mr-2">👨‍👩‍👧</span> Guardian Information
                            </h3>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-gray-700 font-semibold mb-2">
                                        Guardian Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="guardianName"
                                        value={formData.guardianName}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                        placeholder="Parent/Guardian full name"
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-700 font-semibold mb-2">
                                        Guardian Contact Number <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="tel"
                                        name="guardianContactNumber"
                                        value={formData.guardianContactNumber}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                        placeholder="+1 234 567 8900"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Course Selection */}
                        <div>
                            <h3 className="text-2xl font-bold text-primary-800 mb-4 flex items-center">
                                <span className="mr-2">📚</span> Select Course(s) <span className="text-red-500 ml-2">*</span>
                            </h3>

                            <div className="grid md:grid-cols-2 gap-4">
                                {courses.map((course, index) => (
                                    <label
                                        key={index}
                                        className="flex items-center space-x-3 p-4 border-2 border-gray-200 rounded-lg hover:border-primary-400 hover:bg-primary-50 cursor-pointer transition-all"
                                    >
                                        <input
                                            type="checkbox"
                                            value={course}
                                            checked={formData.selectedCourses.includes(course)}
                                            onChange={handleCourseChange}
                                            className="w-5 h-5 text-primary-600 focus:ring-primary-500 rounded"
                                        />
                                        <span className="text-gray-700 font-medium">{course}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Submit Message */}
                        {submitMessage && (
                            <div
                                className={`p-4 rounded-lg ${messageType === 'success'
                                    ? 'bg-green-100 border border-green-400 text-green-800'
                                    : 'bg-red-100 border border-red-400 text-red-800'
                                    }`}
                            >
                                {submitMessage}
                            </div>
                        )}

                        {/* Submit Button */}
                        <div className="pt-6">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full py-4 rounded-lg font-bold text-lg transition-all ${isSubmitting
                                    ? 'bg-gray-400 cursor-not-allowed'
                                    : 'bg-gradient-to-r from-primary-600 to-gold-500 hover:from-primary-700 hover:to-gold-600 text-white shadow-lg hover:shadow-xl'
                                    }`}
                            >
                                {isSubmitting ? 'Submitting...' : 'Submit Application'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default AdmissionForm;
