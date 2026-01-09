import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaLinkedin, FaHeart } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gradient-to-br from-primary-900 to-primary-800 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid md:grid-cols-5 gap-8 mb-8">
                    {/* About */}
                    <div className="md:col-span-2">
                        <h3 className="text-2xl font-bold mb-4 text-gold-400">
                            Noorayn Academy
                        </h3>
                        <p className="text-gray-300 mb-4 leading-relaxed">
                            Illuminating hearts through authentic Quranic education. Join thousands of students worldwide in their journey to learn, memorize, and understand the Holy Quran.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-300 hover:text-gold-400 transition-colors">
                                <FaFacebook size={24} />
                            </a>
                            <a href="#" className="text-gray-300 hover:text-gold-400 transition-colors">
                                <FaTwitter size={24} />
                            </a>
                            <a href="#" className="text-gray-300 hover:text-gold-400 transition-colors">
                                <FaInstagram size={24} />
                            </a>
                            <a href="#" className="text-gray-300 hover:text-gold-400 transition-colors">
                                <FaYoutube size={24} />
                            </a>
                            <a href="#" className="text-gray-300 hover:text-gold-400 transition-colors">
                                <FaLinkedin size={24} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-4 text-gold-400">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="#about" className="text-gray-300 hover:text-gold-400 transition-colors">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="#courses" className="text-gray-300 hover:text-gold-400 transition-colors">
                                    Our Courses
                                </a>
                            </li>
                            <li>
                                <a href="#teachers" className="text-gray-300 hover:text-gold-400 transition-colors">
                                    Our Teachers
                                </a>
                            </li>
                            <li>
                                <a href="#fees" className="text-gray-300 hover:text-gold-400 transition-colors">
                                    Pricing
                                </a>
                            </li>
                            <li>
                                <a href="#admission" className="text-gray-300 hover:text-gold-400 transition-colors">
                                    Admissions
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Developer Info */}
                    <div>
                        <h4 className="text-lg font-bold mb-4 text-gold-400">Developer</h4>
                        <div className="space-y-3">
                            <p className="text-primary-100 font-bold">Muhammad Abdurrahman</p>
                            <p className="text-gray-300 text-sm leading-snug">
                                BS Computer Science<br />
                                <span className="text-xs text-gray-400">Institute of Space Technology</span>
                            </p>
                            <a
                                href="https://www.linkedin.com/in/muhammad-abdurrahman-9471b1252?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-gold-400 hover:text-white transition-colors text-sm font-medium"
                            >
                                <FaLinkedin className="mr-2" /> LinkedIn Profile
                            </a>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-bold mb-4 text-gold-400">Contact</h4>
                        <ul className="space-y-2 text-gray-300 text-sm">
                            <li className="flex items-center">
                                <span className="mr-2">📧</span> itsnoorayn@gmail.com
                            </li>
                            <li className="flex items-center">
                                <span className="mr-2">📱</span> +92 330 9316883
                            </li>
                            <li className="flex items-center">
                                <span className="mr-2">📱</span> +92 329 5209043
                            </li>
                            <li className="flex items-center">
                                <span className="mr-2">💬</span> WhatsApp Support
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-primary-700 pt-8 mt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-gray-300 text-xs">
                            © {currentYear} Noorayn Academy. All rights reserved.
                        </p>
                        <p className="text-gray-300 text-sm flex items-center">
                            Developed with <FaHeart className="text-red-500 mx-1" /> by <span className="ml-1 text-gold-400 font-medium">Muhammad Abdurrahman</span>
                        </p>
                        <div className="flex space-x-6 text-xs uppercase tracking-wider">
                            <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors">
                                Privacy
                            </a>
                            <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors">
                                Terms
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
