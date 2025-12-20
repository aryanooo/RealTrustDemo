
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md fixed w-full z-50 top-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link to="/" className="flex items-center">
                            <img src={logo} alt="Real Trust Logo" className="h-12 w-auto" />
                            <span className="ml-2 text-2xl font-bold text-primary">Real <span className="text-primary font-normal">Trust</span></span>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8 items-center">
                        <Link to="/" className="text-gray-700 hover:text-primary font-medium">Home</Link>
                        <a href="#services" className="text-gray-700 hover:text-primary font-medium">Services</a>
                        <a href="#projects" className="text-gray-700 hover:text-primary font-medium">About Projects</a>
                        <a href="#testimonials" className="text-gray-700 hover:text-primary font-medium">Testimonials</a>
                        <Link to="/contact" className="bg-secondary text-white px-6 py-2 rounded-full font-semibold hover:bg-orange-600 transition duration-300">
                            CONTACT
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-primary focus:outline-none">
                            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white shadow-lg">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50">Home</Link>
                        <a href="#services" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50">Services</a>
                        <a href="#projects" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50">About Projects</a>
                        <a href="#testimonials" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50">Testimonials</a>
                        <Link to="/contact" className="block px-3 py-2 mt-4 text-center rounded-md text-base font-medium bg-secondary text-white hover:bg-orange-600">CONTACT</Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
