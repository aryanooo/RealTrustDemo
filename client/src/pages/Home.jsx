
import { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ConsultationForm from '../components/ConsultationForm';
import { FaDraftingCompass, FaChartLine, FaBullhorn } from 'react-icons/fa';
import { motion } from 'framer-motion';

const HERO_BG = "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80";

const Home = () => {
    const [projects, setProjects] = useState([]);
    const [clients, setClients] = useState([]);

    useEffect(() => {
        // Fetch Projects
        axios.get('http://localhost:5000/api/projects') // Update this with Render URL later
            .then(res => setProjects(res.data))
            .catch(err => console.error(err));

        // Fetch Clients
        axios.get('http://localhost:5000/api/clients') // Update this with Render URL later
            .then(res => setClients(res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div className="font-sans text-gray-800 bg-watermark">
            <Navbar />

            {/* HERO SECTION */}
            <section className="relative h-screen flex items-center pt-20 bg-gray-900 overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-40">
                    <img src={HERO_BG} alt="Hero Background" className="w-full h-full object-cover" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col md:flex-row items-center justify-between">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="md:w-1/2 text-white text-center md:text-left mb-10 md:mb-0"
                    >
                        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
                            Consultation, <br />
                            Design, <br />
                            & Marketing
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg">
                            We help homeowners and professionals build their dream projects with expert guidance and premium services.
                        </p>
                    </motion.div>

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
            <section className="py-20 bg-white relative overflow-hidden">
                {/* Background Decorative Rings */}
                <div className="absolute top-0 right-0 w-[800px] h-[800px] border border-blue-50 rounded-full translate-x-1/3 -translate-y-1/4 pointer-events-none"></div>
                <div className="absolute top-0 right-0 w-[600px] h-[600px] border border-blue-50 rounded-full translate-x-1/3 -translate-y-1/4 pointer-events-none"></div>

                {/* Decorative Dots Grid (Bottom Left) */}
                <div className="absolute bottom-20 left-10 hidden md:grid grid-cols-6 gap-2 opacity-20 pointer-events-none">
                    {[...Array(24)].map((_, i) => (
                        <div key={i} className="w-1.5 h-1.5 bg-gray-300 rounded-full"></div>
                    ))}
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center relative z-10">
                    {/* Left: Text Content */}
                    <div className="md:w-5/12 mb-16 md:mb-0 text-center md:text-left relative">
                        {/* Large faint circle decorations behind text */}
                        <div className="absolute -left-20 top-1/2 w-64 h-64 bg-blue-50 rounded-full filter blur-3xl opacity-50 -z-10"></div>

                        <h2 className="text-3xl md:text-4xl font-bold text-[#3B82F6] mb-6">Not Your Average Realtor</h2>
                        <p className="text-gray-500 leading-relaxed text-sm md:text-base max-w-lg mx-auto md:mx-0">
                            Real Trust has an eye for seeing a property's potential, coordinating design, and effectively marketing to get homeowners top dollar on their sales.
                        </p>
                    </div>

                    {/* Right: Image Collage */}
                    <div className="md:w-7/12 relative flex justify-center md:justify-end items-center h-[500px]">
                        {/* Main Center Image - Man holding house model */}
                        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-white shadow-2xl overflow-hidden z-20 bg-gray-100">
                            <img src="https://images.unsplash.com/photo-1560518883-ce09059ee971?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" alt="Realtor with House Model" className="w-full h-full object-cover" />
                        </div>

                        {/* Top Right Small Image - Couple receiving keys */}
                        <div className="absolute top-0 right-0 md:-right-4 w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-white shadow-xl overflow-hidden z-10 bg-gray-100">
                            <img src="https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" alt="Couple with Keys" className="w-full h-full object-cover" />
                        </div>

                        {/* Bottom Right Small Image - Man with house cutout */}
                        <div className="absolute bottom-0 right-10 md:right-10 w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-white shadow-xl overflow-hidden z-30 bg-gray-100">
                            <img src="https://images.unsplash.com/photo-1556910103-1c02745a30bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" alt="Realtor with House Sign" className="w-full h-full object-cover" />
                        </div>

                        {/* Floating Dots */}
                        <div className="absolute top-20 left-1/4 w-8 h-8 bg-[#3B82F6] rounded-full"></div>
                        <div className="absolute bottom-32 left-1/3 w-4 h-4 bg-[#F97316] rounded-full"></div>
                    </div>
                </div>
            </section>

            {/* "WHY CHOOSE US" SECTION */}
            <section className="py-20 bg-white" id="services">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold text-[#3B82F6] mb-2">Why Choose Us?</h2>
                        <div className="w-16 h-1 bg-[#3B82F6] mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
                        {/* Item 1 */}
                        <div className="flex flex-col items-center">
                            <div className="w-20 h-20 rounded-full border-2 border-[#3B82F6] flex items-center justify-center mb-6 bg-white">
                                <FaDraftingCompass size={32} className="text-[#3B82F6]" />
                            </div>
                            <h3 className="text-xl font-bold text-[#3B82F6] mb-3">Potential ROI</h3>
                            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                                Whether you are looking to buy a fixer-upper or renovate your current home for sale, we will walk you through potential returns for projects.
                            </p>
                        </div>

                        {/* Item 2 */}
                        <div className="flex flex-col items-center">
                            <div className="w-20 h-20 rounded-full border-2 border-[#3B82F6] flex items-center justify-center mb-6 bg-white">
                                <FaChartLine size={32} className="text-[#3B82F6]" />
                            </div>
                            <h3 className="text-xl font-bold text-[#3B82F6] mb-3">Design</h3>
                            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                                Our background in interior design makes the perfect guide through your design options and coordinating contractors to complete the home upgrade.
                            </p>
                        </div>

                        {/* Item 3 */}
                        <div className="flex flex-col items-center">
                            <div className="w-20 h-20 rounded-full border-2 border-[#3B82F6] flex items-center justify-center mb-6 bg-white">
                                <FaBullhorn size={32} className="text-[#3B82F6]" />
                            </div>
                            <h3 className="text-xl font-bold text-[#3B82F6] mb-3">Marketing</h3>
                            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                                Staging consultation, professional photos and a sophisticated digital marketing plan accompany every listing to reach today's buyers.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ABOUT US & COLLAGE SECTION */}
            <section className="py-20 bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Background decorative elements */}
                    <div className="absolute top-0 left-0 w-64 h-64 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 -translate-x-1/2"></div>
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 translate-x-1/2"></div>

                    <div className="flex flex-col items-center">
                        {/* Image Compilation */}
                        <div className="relative w-full max-w-5xl h-[400px] md:h-[500px] mb-20">
                            {/* Center Image */}
                            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 w-64 md:w-80 shadow-2xl">
                                <img src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" alt="Meeting" className="w-full h-auto rounded-lg" />
                            </div>

                            {/* Left Image */}
                            <div className="absolute left-4 md:left-20 top-20 z-10 w-48 md:w-64 shadow-xl">
                                <img src="https://images.unsplash.com/photo-1577415124269-fc1140a69e91?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" alt="Handshake" className="w-full h-auto rounded-lg" />
                                {/* Orange decorative corner */}
                                <div className="absolute -bottom-4 -left-4 w-12 h-12 border-b-4 border-l-4 border-[#F97316] -z-10"></div>
                            </div>

                            {/* Right Image */}
                            <div className="absolute right-4 md:right-20 bottom-20 z-10 w-48 md:w-64 shadow-xl">
                                <img src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" alt="Family" className="w-full h-auto rounded-lg" />
                                {/* Orange decorative corner */}
                                <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-4 border-r-4 border-[#F97316] -z-10"></div>
                            </div>

                            {/* Blue decorative squares */}
                            <div className="absolute left-1/2 top-10 transform -translate-x-40 md:-translate-x-60 w-12 h-12 bg-[#3B82F6]"></div>
                            <div className="absolute right-1/2 top-20 transform translate-x-40 md:translate-x-60 w-16 h-16 border-t-8 border-r-8 border-[#3B82F6]"></div>
                            <div className="absolute left-20 bottom-10 w-16 h-16 bg-blue-100 opacity-50"></div>
                        </div>

                        {/* About Us Content */}
                        <div className="text-center max-w-3xl">
                            <div className="mb-8">
                                <h2 className="text-3xl font-bold text-[#3B82F6] mb-2">About Us</h2>
                                <div className="w-16 h-1 bg-[#3B82F6] mx-auto rounded-full"></div>
                            </div>
                            <p className="text-gray-500 mb-8 leading-relaxed">
                                Fifteen years of experience in real estate, excellent customer service and a commitment to work hard, listen and follow through. We provide quality service to build relationships with clients and, more importantly, maintain those relationships by communicating effectively.
                            </p>
                            <button className="border-2 border-[#3B82F6] text-[#3B82F6] font-bold py-3 px-10 rounded-sm hover:bg-[#3B82F6] hover:text-white transition duration-300 uppercase tracking-widest text-sm">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* PROJECTS SECTION */}
            <section className="py-20 bg-gray-50" id="projects">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-primary mb-12">Our Projects</h2>
                    {projects.length === 0 ? (
                        <p>Loading projects...</p>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {projects.map(project => (
                                <div key={project._id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300">
                                    <div className="h-48 overflow-hidden">
                                        <img
                                            src={project.image.startsWith('http') ? project.image : `http://localhost:5000${project.image}`}
                                            alt={project.title}
                                            className="w-full h-full object-cover transform hover:scale-110 transition duration-500"
                                        />
                                    </div>
                                    <div className="p-6 text-left">
                                        <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                                        <p className="text-gray-600 text-sm line-clamp-3">{project.description}</p>
                                        <button className="mt-4 text-primary font-bold hover:text-secondary uppercase text-sm tracking-wider">
                                            Read More
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* HAPPY CLIENTS SECTION */}
            <section className="py-20 bg-white" id="testimonials">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-primary mb-12">Happy Clients</h2>
                    {clients.length === 0 ? (
                        <p>Loading testimonials...</p>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                            {clients.map(client => (
                                <div key={client._id} className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition duration-300 flex flex-col items-center text-center">
                                    <div className="w-16 h-16 rounded-full overflow-hidden mb-4 border-2 border-white shadow-md">
                                        <img
                                            src={client.image.startsWith('http') ? client.image : `http://localhost:5000${client.image}`}
                                            alt={client.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <p className="text-gray-600 italic text-sm mb-4">"{client.description}"</p>
                                    <h4 className="font-bold text-base text-primary">{client.name}</h4>
                                    <p className="text-secondary text-xs font-semibold">{client.designation}</p>
                                    {client.location && <p className="text-gray-400 text-xs">{client.location}</p>}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* LEARN MORE SECTION */}
            <section className="relative py-32 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')" }}>
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                        Learn more about our listing process, as well as our additional staging and design work.
                    </h2>
                    <button className="bg-white text-primary font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition duration-300">
                        LEARN MORE
                    </button>
                </div>
            </section>

            {/* NEWSLETTER SECTION */}
            <section className="py-10 bg-[#3B82F6]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between text-white">
                    {/* Left: Navigation Links */}
                    <div className="flex flex-wrap justify-center md:justify-start gap-6 md:gap-8 text-sm font-medium mb-6 md:mb-0">
                        <a href="#" className="hover:text-blue-100 transition">Home</a>
                        <a href="#services" className="hover:text-blue-100 transition">Services</a>
                        <a href="#projects" className="hover:text-blue-100 transition">Projects</a>
                        <a href="#testimonials" className="hover:text-blue-100 transition">Testimonials</a>
                        <a href="/contact" className="hover:text-blue-100 transition">Contact</a>
                    </div>

                    {/* Right: Subscribe Form */}
                    <div className="flex flex-col sm:flex-row items-center gap-4">
                        <span className="font-semibold whitespace-nowrap">Subscribe Us</span>
                        <div className="flex items-center bg-[#3B82F6] border border-white rounded-lg overflow-hidden p-1">
                            <input
                                type="email"
                                placeholder="Enter Email Address"
                                className="bg-transparent text-white px-4 py-2 outline-none placeholder-blue-100 text-sm w-64"
                            />
                            <button className="bg-white text-[#3B82F6] px-6 py-2 rounded-md font-bold text-sm hover:bg-gray-100 transition">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Home;

