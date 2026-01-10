import { FaBook, FaPray, FaQuran, FaStar } from 'react-icons/fa';

const Courses = () => {
    const courses = [
        {
            name: 'Hifz-ul-Quran',
            description: 'Complete Quran memorization with Tajweed',
            icon: '📖',
            duration: '2-4 years',
            level: 'Advanced',
            features: ['One-on-one classes', 'Daily revision', 'Progress tracking'],
        },
        {
            name: 'Nazra Quran',
            description: 'Learn to read Quran with proper pronunciation',
            icon: '📚',
            duration: '6-12 months',
            level: 'Beginner',
            features: ['Basic Arabic', 'Makharij', 'Fluent reading'],
        },
        {
            name: 'Tajweed-ul-Quran',
            description: 'Master the rules of Quranic recitation',
            icon: '🎯',
            duration: '6 months',
            level: 'Intermediate',
            features: ['Tajweed rules', 'Practical application', 'Certification'],
        },
        {
            name: 'Special Surahs & Last 10 Surahs',
            description: 'Learn and memorize important Surahs including Surah Yaseen, Mulk, Waqiah, Kahf, and the Last 10 Surahs of Quran.',
            icon: '🌟',
            level: 'Beginner',
            features: ['Memorization', 'Translation', 'Tafseer', 'Perfect Recitation'],
        },
        {
            name: 'Surah Rehman',
            description: 'Learn the beauty of Surah Ar-Rahman',
            icon: '💎',
            level: 'Beginner',
            features: ['Beautiful recitation', 'Meanings', 'Tafseer'],
        },
        {
            name: 'Learn Duas',
            description: 'Essential daily Islamic supplications',
            icon: '🤲',
            level: 'Beginner',
            features: ['40+ Duas', 'Arabic & translation', 'When to recite'],
        },
    ];

    return (
        <section id="courses" className="py-20 bg-gradient-to-br from-primary-50 to-gold-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="section-title">Our Courses</h2>
                    <div className="w-24 h-1 bg-gold-500 mx-auto mt-4"></div>
                    <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
                        Choose from our comprehensive range of Quranic courses designed for all age groups and skill levels
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {courses.map((course, index) => (
                        <div
                            key={index}
                            className="card group hover:scale-105 transition-transform cursor-pointer"
                        >
                            <div className="text-center mb-4">
                                <div className="text-6xl mb-3">{course.icon}</div>
                                <h3 className="text-2xl font-bold text-primary-800 mb-2 group-hover:text-primary-600 transition-colors">
                                    {course.name}
                                </h3>
                                <p className="text-gray-600 mb-4">{course.description}</p>
                            </div>

                            <div className="space-y-3 mb-4">
                                {course.duration && (
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-gray-600">Duration:</span>
                                        <span className="font-semibold text-primary-700">{course.duration}</span>
                                    </div>
                                )}
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-gray-600">Level:</span>
                                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${course.level === 'Beginner' ? 'bg-green-100 text-green-700' :
                                        course.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                                            'bg-red-100 text-red-700'
                                        }`}>
                                        {course.level}
                                    </span>
                                </div>
                            </div>

                            <div className="border-t border-gray-200 pt-4">
                                <p className="text-sm font-semibold text-gray-700 mb-2">What's Included:</p>
                                <ul className="space-y-1">
                                    {course.features.map((feature, idx) => (
                                        <li key={idx} className="text-sm text-gray-600 flex items-center">
                                            <span className="text-primary-500 mr-2">✓</span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mt-6">
                                <a
                                    href="#admission"
                                    className="block w-full text-center py-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors"
                                >
                                    Enroll Now
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );

};

export default Courses;
