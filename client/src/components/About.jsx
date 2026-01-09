const About = () => {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="section-title">About Noorayn Academy</h2>
                    <div className="w-24 h-1 bg-gold-500 mx-auto mt-4"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-6">
                        <p className="text-lg text-gray-700 leading-relaxed">
                            <span className="text-2xl font-bold text-primary-700">Noorayn Academy</span> is a premium online Quran learning platform dedicated to providing the{' '}
                            <span className="font-semibold text-primary-600">highest quality Islamic education</span> to students of all ages around the globe.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Our name, <span className="font-semibold italic">"Noorayn"</span> (نورین), meaning "two lights," symbolizes the light of knowledge and the light of faith that we strive to illuminate in every student's heart.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            We believe that learning the Holy Quran is not just about reading the words, but about understanding, implementing, and living by its divine teachings. Our mission is to make quality Quranic education accessible to everyone, everywhere.
                        </p>

                        {/* Quote */}
                        <div className="bg-gradient-to-r from-primary-50 to-gold-50 border-l-4 border-primary-600 p-6 rounded-lg">
                            <p className="text-lg italic text-gray-800 font-arabic">
                                "خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ"
                            </p>
                            <p className="text-base text-gray-700 mt-2">
                                "The best among you are those who learn the Quran and teach it."
                            </p>
                            <p className="text-sm text-gray-600 mt-1">- Prophet Muhammad ﷺ (Sahih Bukhari)</p>
                        </div>
                    </div>

                    {/* Right - Features Grid */}
                    <div className="grid sm:grid-cols-2 gap-6">
                        <div className="card text-center transform hover:-translate-y-2 transition-transform">
                            <div className="text-5xl mb-4">🎓</div>
                            <h3 className="text-xl font-bold text-primary-800 mb-2">Qualified Teachers</h3>
                            <p className="text-gray-600">
                                Certified Qaris and Hafiz with years of teaching experience
                            </p>
                        </div>

                        <div className="card text-center transform hover:-translate-y-2 transition-transform">
                            <div className="text-5xl mb-4">👨‍👩‍👧‍👦</div>
                            <h3 className="text-xl font-bold text-primary-800 mb-2">Separate Teachers</h3>
                            <p className="text-gray-600">
                                Female teachers for female students, maintaining Islamic values
                            </p>
                        </div>

                        <div className="card text-center transform hover:-translate-y-2 transition-transform">
                            <div className="text-5xl mb-4">🌐</div>
                            <h3 className="text-xl font-bold text-primary-800 mb-2">Global Reach</h3>
                            <p className="text-gray-600">
                                Serving students worldwide with flexible online classes
                            </p>
                        </div>

                        <div className="card text-center transform hover:-translate-y-2 transition-transform">
                            <div className="text-5xl mb-4">📖</div>
                            <h3 className="text-xl font-bold text-primary-800 mb-2">Comprehensive Courses</h3>
                            <p className="text-gray-600">
                                From beginners to advanced Hifz and Tajweed programs
                            </p>
                        </div>

                        <div className="card text-center transform hover:-translate-y-2 transition-transform sm:col-span-2">
                            <div className="text-5xl mb-4">✨</div>
                            <h3 className="text-xl font-bold text-primary-800 mb-2">Best Learning Experience</h3>
                            <p className="text-gray-600">
                                Interactive classes with personalized attention and progress tracking
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
