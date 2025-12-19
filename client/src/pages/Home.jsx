
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ConsultationForm from '../components/ConsultationForm';
import { FaDraftingCompass, FaChartLine, FaBullhorn } from 'react-icons/fa'; // Icons for "Why Choose Us"
import { motion } from 'framer-motion';

// Placeholder images - Replace with real ones later
const HERO_BG = "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80";

const Home = () => {
    return (
        <div className="font-sans text-gray-800">
            <Navbar />

            {/* HERO SECTION */}
            <section className="relative h-screen flex items-center pt-20 bg-gray-900 overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0 opacity-40">
                    <img src={HERO_BG} alt="Hero Background" className="w-full h-full object-cover" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col md:flex-row items-center justify-between">
                    {/* Left Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="md:w-1/2 text-white text-center md:text-left mb-10 md:mb-0"
                    >
                        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
                            Consultation, <br />
                            <span className="text-secondary">Design,</span> <br />
                            & Marketing
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg">
                            We help homeowners and professionals build their dream projects with expert guidance and premium services.
                        </p>
                    </motion.div>

                    {/* Right Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="md:w-1/2 flex justify-center md:justify-end"
                    >
                        <ConsultationForm />
                    </motion.div>
                </div>
            </section>

            {/* "NOT YOUR AVERAGE REALTOR" SECTION */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-10 md:mb-0 relative">
                        <div className="w-80 h-80 rounded-full overflow-hidden border-8 border-secondary mx-auto">
                            <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Realtor" className="w-full h-full object-cover" />
                        </div>
                        {/* Decorative circles */}
                        <div className="absolute top-0 right-10 w-20 h-20 bg-secondary rounded-full opacity-20 -z-10"></div>
                        <div className="absolute bottom-10 left-10 w-32 h-32 bg-primary rounded-full opacity-20 -z-10"></div>
                    </div>
                    <div className="md:w-1/2 md:pl-16 text-center md:text-left">
                        <h2 className="text-3xl font-bold text-primary mb-4">Not Your Average Realtor</h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            Real Trust is innovative and creative. We don't just sell houses; we verify emotions and lifestyle. Our team of experts ensures that every step of your journey is seamless and rewarding.
                        </p>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            We leverage the latest technology and market insights to give you an edge. Whether buying, selling, or investing, we are your trusted partners.
                        </p>
                    </div>
                </div>
            </section>

            {/* "WHY CHOOSE US" SECTION */}
            <section className="py-20 bg-white" id="services">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-primary mb-12">Why Choose Us?</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-8 border border-gray-100 rounded-xl hover:shadow-xl transition duration-300">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                                <FaChartLine size={32} />
                            </div>
                            <h3 className="text-xl font-bold mb-4">Potential ROI</h3>
                            <p className="text-gray-600">
                                Maximize your investment with our data-driven strategies and market expertise.
                            </p>
                        </div>

                        <div className="p-8 border border-gray-100 rounded-xl hover:shadow-xl transition duration-300">
                            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 text-secondary">
                                <FaDraftingCompass size={32} />
                            </div>
                            <h3 className="text-xl font-bold mb-4">Design</h3>
                            <p className="text-gray-600">
                                World-class architectural and interior design suggestions to increase property value.
                            </p>
                        </div>

                        <div className="p-8 border border-gray-100 rounded-xl hover:shadow-xl transition duration-300">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
                                <FaBullhorn size={32} />
                            </div>
                            <h3 className="text-xl font-bold mb-4">Marketing</h3>
                            <p className="text-gray-600">
                                Strategic marketing campaigns that reach the right audience at the right time.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* PROJECTS SECTION - Placeholder for now */}
            <section className="py-20 bg-gray-50" id="projects">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-primary mb-12">Our Projects</h2>
                    <p>Projects grid will be loaded from backend here...</p>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Home;
