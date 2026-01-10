import { FaVideo, FaChalkboardTeacher, FaUserClock, FaDownload } from 'react-icons/fa';

const ZoomClasses = () => {
    const steps = [
        {
            icon: <FaVideo className="text-4xl text-blue-500" />,
            title: "Live Classes on Zoom",
            description: "All our classes are conducted live and interactively using the Zoom application, ensuring a real-classroom experience from the comfort of your home."
        },
        {
            icon: <FaChalkboardTeacher className="text-4xl text-green-500" />,
            title: "Proper Demo Session",
            description: "We provide a complete demo session before you start regular classes. This helps parents and students understand our teaching style and technical setup."
        },
        {
            icon: <FaDownload className="text-4xl text-purple-500" />,
            title: "Installation Guidance",
            description: "During the demo, we guide you step-by-step on how to install and set up the Zoom app on your laptop, tablet, or smartphone."
        },
        {
            icon: <FaUserClock className="text-4xl text-orange-500" />,
            title: "Easy to Join",
            description: "We teach students and parents how to join live sessions with a single click and how to interact effectively with the teacher during the class."
        }
    ];

    return (
        <section id="how-it-works" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="section-title">Class Delivery Method</h2>
                    <div className="w-24 h-1 bg-gold-500 mx-auto mt-4"></div>
                    <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto font-semibold">
                        We use modern technology to bring the light of the Quran to your home.
                        Our primary tool for interactive learning is <span className="text-blue-600">Zoom</span>.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <div key={index} className="card p-8 bg-gray-50 border-t-4 border-primary-600 hover:shadow-xl transition-shadow flex flex-col items-center text-center">
                            <div className="mb-6 bg-white p-4 rounded-full shadow-sm">
                                {step.icon}
                            </div>
                            <h3 className="text-xl font-bold text-primary-800 mb-3">{step.title}</h3>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-16 bg-blue-50 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between border border-blue-100">
                    <div className="md:w-2/3 mb-8 md:mb-0">
                        <h3 className="text-2xl font-bold text-primary-800 mb-4">New to Online Classes?</h3>
                        <p className="text-gray-700 text-lg">
                            Don't worry! In our <span className="font-bold text-primary-700">Free Demo Session</span>, we provide personalized guidance for parents and students on:
                        </p>
                        <ul className="mt-4 space-y-2 text-gray-600 list-disc list-inside">
                            <li>Downloading and logging into the Zoom app</li>
                            <li>Testing your microphone and camera settings</li>
                            <li>How to use the virtual whiteboard for lessons</li>
                            <li>Techniques for interactive student-teacher communication</li>
                        </ul>
                    </div>
                    <div className="md:w-1/4 flex justify-center">
                        <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-lg animate-pulse">
                            <FaVideo className="text-6xl text-blue-500" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ZoomClasses;
