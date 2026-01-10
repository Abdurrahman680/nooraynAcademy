import { useState } from 'react';
import { FaTimes, FaGraduationCap, FaBriefcase, FaAward } from 'react-icons/fa';

const Teachers = () => {
    const [showModal, setShowModal] = useState(false);

    const maleTeachers = [
        {
            name: 'Qari Muhammad Abdullah',
            education: 'BA, Hafiz-e-Quran',
            experience: '5 years',
            institute: 'Dar-e-Arqam School',
            achievement: 'Guided nearly 15 students to complete Hifz-e-Quran',
            photo: '👨‍🏫', // Placeholder emoji - will generate image
            specialization: 'Hifz & Tajweed',
        },
        {
            name: 'Hafiz Muhammad Ibrahim',
            education: 'BS Arabic, Hafiz-e-Quran',
            experience: 'Extensive online Quran teaching experience',
            institute: 'Multiple Online Platforms',
            achievement: 'Expert in online teaching methodology',
            photo: '👨‍💼',
            specialization: 'Nazra & Hifz e Quran',
        },
        {
            name: 'Sheikh Zain ul Abedine',
            education: 'Asshahdat ul Alamia (Institute of Islamic Sciences, Islamabad, Pakistan), MA (Islamic Sciences), Punjab University',
            experience: '4 years of online Quran teaching',
            institute: 'Noorayn Academy',
            achievement: 'Director, Noorayn Academy',
            photo: '👨‍🎓',
            specialization: 'Director & Senior Teacher',
        },
    ];

    const femaleTeachers = [
        {
            name: 'Qaria Shawana Sarfraz',
            education: 'Hafiza-e-Quran, BS Math',
            experience: '1 years',
            institute: 'Al-Huda International',
            achievement: 'Specialized in teaching female students',
            photo: '👩‍🏫',
            specialization: 'Hifz & Tajweed',
        },

    ];

    return (
        <section id="teachers" className="py-20 bg-gradient-to-br from-primary-50 to-gold-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="section-title">Our Qualified Teachers</h2>
                    <div className="w-24 h-1 bg-gold-500 mx-auto mt-4"></div>
                    <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
                        Learn from experienced and certified Quran teachers dedicated to your success
                    </p>
                </div>

                <div className="text-center">
                    <button
                        onClick={() => setShowModal(true)}
                        className="btn-primary"
                    >
                        View Our Teachers
                    </button>
                    <p className="text-gray-600 mt-4 italic">
                        ★ Female students are taught by female teachers only
                    </p>
                </div>

                {/* Teachers Modal */}
                {showModal && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 overflow-y-auto">
                        <div className="bg-white rounded-2xl shadow-2xl max-w-6xl w-full my-8 relative max-h-[90vh] overflow-y-auto">
                            {/* Close Button */}
                            <button
                                onClick={() => setShowModal(false)}
                                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 bg-white rounded-full p-2 shadow-lg z-10"
                            >
                                <FaTimes size={24} />
                            </button>

                            <div className="p-8">
                                <h3 className="text-3xl font-bold text-primary-800 text-center mb-8">
                                    Meet Our Dedicated Teachers
                                </h3>

                                {/* Male Teachers Section */}
                                <div className="mb-12">
                                    <h4 className="text-2xl font-bold text-primary-700 mb-6 flex items-center">
                                        <span className="mr-3">👨‍🏫</span> Male Teachers
                                    </h4>
                                    <div className="grid md:grid-cols-3 gap-6">
                                        {maleTeachers.map((teacher, index) => (
                                            <div
                                                key={index}
                                                className="card hover:scale-105 transition-transform"
                                            >
                                                <div className="text-center mb-4">
                                                    <div className="text-6xl mb-3">{teacher.photo}</div>
                                                    <h5 className="text-xl font-bold text-primary-800">
                                                        {teacher.name}
                                                    </h5>
                                                    <p className="text-sm text-gold-600 font-semibold mt-1">
                                                        {teacher.specialization}
                                                    </p>
                                                </div>

                                                <div className="space-y-3 text-sm">
                                                    <div className="flex items-start">
                                                        <FaGraduationCap className="text-primary-600 mt-1 mr-2 flex-shrink-0" />
                                                        <div>
                                                            <p className="font-semibold text-gray-700">Education:</p>
                                                            <p className="text-gray-600">{teacher.education}</p>
                                                        </div>
                                                    </div>

                                                    <div className="flex items-start">
                                                        <FaBriefcase className="text-primary-600 mt-1 mr-2 flex-shrink-0" />
                                                        <div>
                                                            <p className="font-semibold text-gray-700">Experience:</p>
                                                            <p className="text-gray-600">{teacher.experience}</p>
                                                        </div>
                                                    </div>

                                                    <div className="flex items-start">
                                                        <FaAward className="text-primary-600 mt-1 mr-2 flex-shrink-0" />
                                                        <div>
                                                            <p className="font-semibold text-gray-700">Achievement:</p>
                                                            <p className="text-gray-600">{teacher.achievement}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Female Teachers Section */}
                                <div>
                                    <h4 className="text-2xl font-bold text-primary-700 mb-6 flex items-center">
                                        <span className="mr-3">👩‍🏫</span> Female Teachers
                                    </h4>
                                    <div className="bg-pink-50 border-l-4 border-pink-500 p-4 mb-6 rounded">
                                        <p className="text-gray-700">
                                            <strong>Important:</strong> Female students are taught exclusively by our qualified female teachers, maintaining Islamic modesty and comfort.
                                        </p>
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
                                        {femaleTeachers.map((teacher, index) => (
                                            <div
                                                key={index}
                                                className="card hover:scale-105 transition-transform"
                                            >
                                                <div className="text-center mb-4">
                                                    <div className="text-6xl mb-3">{teacher.photo}</div>
                                                    <h5 className="text-xl font-bold text-primary-800">
                                                        {teacher.name}
                                                    </h5>
                                                    <p className="text-sm text-gold-600 font-semibold mt-1">
                                                        {teacher.specialization}
                                                    </p>
                                                </div>

                                                <div className="space-y-3 text-sm">
                                                    <div className="flex items-start">
                                                        <FaGraduationCap className="text-primary-600 mt-1 mr-2 flex-shrink-0" />
                                                        <div>
                                                            <p className="font-semibold text-gray-700">Education:</p>
                                                            <p className="text-gray-600">{teacher.education}</p>
                                                        </div>
                                                    </div>

                                                    <div className="flex items-start">
                                                        <FaBriefcase className="text-primary-600 mt-1 mr-2 flex-shrink-0" />
                                                        <div>
                                                            <p className="font-semibold text-gray-700">Experience:</p>
                                                            <p className="text-gray-600">{teacher.experience}</p>
                                                        </div>
                                                    </div>

                                                    <div className="flex items-start">
                                                        <FaAward className="text-primary-600 mt-1 mr-2 flex-shrink-0" />
                                                        <div>
                                                            <p className="font-semibold text-gray-700">Achievement:</p>
                                                            <p className="text-gray-600">{teacher.achievement}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Teachers;
