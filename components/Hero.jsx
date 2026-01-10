'use client';
import { useState, useEffect } from 'react';

const Hero = () => {
    const [currentImage, setCurrentImage] = useState(0);

    // Array of hero images
    const heroImages = [
        '/images/hero/hero_quran_1_1767935772251.png',
        '/images/hero/hero_quran_2_1767935791731.png',
        '/images/hero/hero_quran_3_1767935812620.png',
        '/images/hero/hero_quran_5_1767935841528.png',
        '/images/hero/hero_quran_6_1767935878601.png',
    ];

    // Auto-rotate images every 4 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % heroImages.length);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-20 bg-gradient-to-br from-primary-50 via-white to-gold-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-6 animate-slide-up">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-900 leading-tight">
                            Learn the Holy Quran <span className="text-gold-500">Online</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-700 font-medium">
                            Noorayn Academy - Illuminating Hearts Through Quranic Knowledge
                        </p>
                        <p className="text-lg text-gray-600">
                            Join thousands of students worldwide in their journey to learn, memorize, and understand the Holy Quran with expert guidance from qualified teachers.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <a href="#admission" className="btn-primary text-center">
                                Enroll Now
                            </a>
                            <a href="#courses" className="btn-secondary text-center">
                                View Courses
                            </a>
                        </div>

                        {/* Features */}
                        <div className="grid grid-cols-2 gap-4 pt-8">
                            <div className="flex items-center space-x-3">
                                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                                    <span className="text-2xl">📚</span>
                                </div>
                                <div>
                                    <p className="font-semibold text-primary-800">Expert Teachers</p>
                                    <p className="text-sm text-gray-600">Qualified & Certified</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center">
                                    <span className="text-2xl">🌍</span>
                                </div>
                                <div>
                                    <p className="font-semibold text-primary-800">Learn Anywhere</p>
                                    <p className="text-sm text-gray-600">100% Online</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                                    <span className="text-2xl">👥</span>
                                </div>
                                <div>
                                    <p className="font-semibold text-primary-800">Gender Separated</p>
                                    <p className="text-sm text-gray-600">Female & Male Teachers</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center">
                                    <span className="text-2xl">⏰</span>
                                </div>
                                <div>
                                    <p className="font-semibold text-primary-800">Flexible Timings</p>
                                    <p className="text-sm text-gray-600">Choose Your Schedule</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right - Image Gallery with Fade Animation */}
                    <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                        {heroImages.map((image, index) => (
                            <div
                                key={index}
                                className={`absolute inset-0 transition-opacity duration-1000 ${index === currentImage ? 'opacity-100' : 'opacity-0'
                                    }`}
                            >
                                <img
                                    src={image}
                                    alt={`Quran ${index + 1}`}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        ))}

                        {/* Image indicators */}
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                            {heroImages.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentImage(index)}
                                    className={`w-2.5 h-2.5 rounded-full transition-all ${index === currentImage
                                        ? 'bg-white w-8'
                                        : 'bg-white/50 hover:bg-white/75'
                                        }`}
                                    aria-label={`Go to image ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
