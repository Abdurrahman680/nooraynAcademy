import { FaCheck } from 'react-icons/fa';

const Fees = () => {
    const pricingPlans = [
        {
            course: 'Nazra Quran',
            price: 30,
            icon: '📚',
            features: [
                'One-on-one live classes',
                'Flexible scheduling',
                'Progress reports',
                'Recorded sessions',
                'WhatsApp support',
            ],
            popular: false,
        },
        {
            course: 'Tajweed-ul-Quran',
            price: 30,
            icon: '🎯',
            features: [
                'Expert Tajweed teacher',
                'Personal attention',
                'Practical exercises',
                'Certificate upon completion',
                '24/7 support',
            ],
            popular: true,
        },
        {
            course: 'Learn Duas',
            price: 32,
            icon: '🤲',
            features: [
                '40+ essential Duas',
                'Audio pronunciations',
                'Meanings & context',
                'Daily practice',
                'Lifetime access to materials',
            ],
            popular: false,
        },
        {
            course: 'Hifz-ul-Quran',
            price: 36,
            icon: '📖',
            features: [
                'Dedicated Hafiz teacher',
                'Daily revision system',
                'Customized pace',
                'Parent updates',
                'Performance tracking',
            ],
            popular: true,
        },
    ];

    return (
        <section id="fees" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="section-title">Affordable Pricing</h2>
                    <div className="w-24 h-1 bg-gold-500 mx-auto mt-4"></div>
                    <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
                        Quality Quranic education at competitive prices. Invest in your spiritual growth.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {pricingPlans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative card ${plan.popular
                                ? 'border-2 border-gold-500 transform scale-105 shadow-2xl'
                                : ''
                                } hover:scale-110 transition-transform`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                    <span className="bg-gold-500 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                                        ⭐ Popular
                                    </span>
                                </div>
                            )}

                            <div className="text-center mb-6">
                                <div className="text-6xl mb-4">{plan.icon}</div>
                                <h3 className="text-2xl font-bold text-primary-800 mb-2">
                                    {plan.course}
                                </h3>
                                <div className="mt-4">
                                    <span className="text-5xl font-bold text-primary-700">
                                        ${plan.price}
                                    </span>
                                    <span className="text-gray-600 text-lg">/month</span>
                                </div>
                            </div>

                            <div className="border-t border-gray-200 pt-6 mb-6">
                                <ul className="space-y-3">
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start text-gray-700">
                                            <FaCheck className="text-primary-500 mt-1 mr-3 flex-shrink-0" />
                                            <span className="text-sm">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <a
                                href="#admission"
                                className={`block w-full text-center py-3 rounded-lg font-semibold transition-colors ${plan.popular
                                    ? 'bg-gold-500 hover:bg-gold-600 text-white'
                                    : 'bg-primary-600 hover:bg-primary-700 text-white'
                                    }`}
                            >
                                Get Started
                            </a>
                        </div>
                    ))}
                </div>

                {/* Additional Info */}
                <div className="mt-12 grid md:grid-cols-3 gap-6">
                    <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-6 text-center">
                        <div className="text-4xl mb-3">💳</div>
                        <h4 className="text-lg font-bold text-primary-800 mb-2">Flexible Payments</h4>
                        <p className="text-gray-700 text-sm">
                            Pay monthly with no long-term contracts. Cancel anytime.
                        </p>
                    </div>

                    <div className="bg-gradient-to-br from-gold-50 to-gold-100 rounded-xl p-6 text-center">
                        <div className="text-4xl mb-3">🎁</div>
                        <h4 className="text-lg font-bold text-primary-800 mb-2">Trial Class</h4>
                        <p className="text-gray-700 text-sm">
                            Get your first class absolutely free! No credit card required.
                        </p>
                    </div>

                    <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-6 text-center">
                        <div className="text-4xl mb-3">👨‍👩‍👧‍👦</div>
                        <h4 className="text-lg font-bold text-primary-800 mb-2">Family Discount</h4>
                        <p className="text-gray-700 text-sm">
                            Enroll multiple family members and get 10% off on total fees.
                        </p>
                    </div>
                </div>

                <div className="text-center mt-12">
                    <p className="text-gray-600 italic">
                        * Prices are in USD. Special discounts available for long-term enrollments.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Fees;
