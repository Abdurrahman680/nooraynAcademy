import { FaLinkedin, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="section-title">Contact Us</h2>
                    <div className="w-24 h-1 bg-gold-500 mx-auto mt-4"></div>
                    <p className="text-lg text-gray-600 mt-4">
                        We're here to help! Reach out to us through any of the following channels.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {/* WhatsApp */}
                    <div className="card text-center hover:scale-105 transition-transform group">
                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-500 transition-colors">
                            <FaWhatsapp className="text-green-600 group-hover:text-white text-4xl transition-colors" />
                        </div>
                        <h3 className="text-xl font-bold text-primary-800 mb-2">WhatsApp</h3>
                        <p className="text-gray-600 mb-2">Chat with us instantly</p>
                        <div className="space-y-1">
                            <a href="https://wa.me/923309316883" target="_blank" rel="noopener noreferrer" className="block text-primary-600 font-semibold hover:text-primary-700">
                                +92 330 9316883
                            </a>
                            <a href="https://wa.me/923295209043" target="_blank" rel="noopener noreferrer" className="block text-primary-600 font-semibold hover:text-primary-700">
                                +92 329 5209043
                            </a>
                        </div>
                    </div>

                    {/* Email */}
                    <a
                        href="mailto:itsnoorayn@gmail.com"
                        className="card text-center hover:scale-105 transition-transform group"
                    >
                        <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500 transition-colors">
                            <FaEnvelope className="text-blue-600 group-hover:text-white text-4xl transition-colors" />
                        </div>
                        <h3 className="text-xl font-bold text-primary-800 mb-2">Email</h3>
                        <p className="text-gray-600 mb-2">Send us a message</p>
                        <p className="text-primary-600 font-semibold break-all">itsnoorayn@gmail.com</p>
                    </a>

                    {/* LinkedIn */}
                    <a
                        href="https://www.linkedin.com/company/noorayn-academy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="card text-center hover:scale-105 transition-transform group"
                    >
                        <div className="w-20 h-20 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-sky-600 transition-colors">
                            <FaLinkedin className="text-sky-600 group-hover:text-white text-4xl transition-colors" />
                        </div>
                        <h3 className="text-xl font-bold text-primary-800 mb-2">LinkedIn</h3>
                        <p className="text-gray-600 mb-2">Connect with us</p>
                        <p className="text-primary-600 font-semibold">Noorayn Academy</p>
                    </a>
                </div>

                {/* Additional Contact Info */}
                <div className="mt-16 bg-gradient-to-br from-primary-50 to-gold-50 rounded-2xl p-8 md:p-12">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-2xl font-bold text-primary-800 mb-6">Get in Touch</h3>
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <FaMapMarkerAlt className="text-primary-600 text-xl mt-1 mr-4" />
                                    <div>
                                        <p className="font-semibold text-gray-700">Address:</p>
                                        <p className="text-gray-600">Online Platform - Available Worldwide</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <FaPhone className="text-primary-600 text-xl mt-1 mr-4" />
                                    <div>
                                        <p className="font-semibold text-gray-700">Phone / WhatsApp:</p>
                                        <p className="text-gray-600">+92 330 9316883</p>
                                        <p className="text-gray-600">+92 329 5209043</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <FaEnvelope className="text-primary-600 text-xl mt-1 mr-4" />
                                    <div>
                                        <p className="font-semibold text-gray-700">Email:</p>
                                        <p className="text-gray-600">itsnoorayn@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-primary-800 mb-6">Office Hours</h3>
                            <div className="space-y-3">
                                <div className="flex justify-between items-center border-b border-primary-200 pb-2">
                                    <span className="font-semibold text-gray-700">Monday - Friday:</span>
                                    <span className="text-gray-600">9:00 AM - 9:00 PM</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-primary-200 pb-2">
                                    <span className="font-semibold text-gray-700">Saturday:</span>
                                    <span className="text-gray-600">10:00 AM - 6:00 PM</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-primary-200 pb-2">
                                    <span className="font-semibold text-gray-700">Sunday:</span>
                                    <span className="text-gray-600">Closed</span>
                                </div>
                            </div>
                            <p className="text-sm text-gray-600 mt-4 italic">
                                * All times are in EST. Classes available in multiple time zones.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
