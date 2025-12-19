import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">

                {/* Left: Copyright */}
                <div className="text-gray-400 text-xs text-center md:text-left">
                    All Rights Reserved 2023
                </div>

                {/* Center: Brand */}
                <div className="flex items-center">
                    <img src="/src/assets/logo.png" alt="Real Trust Logo" className="h-8 w-auto mr-2" />
                    <h2 className="text-xl text-white font-bold">
                        Real <span className="font-normal">Trust</span>
                    </h2>
                </div>

                {/* Right: Socials */}
                <div className="flex space-x-4">
                    <a href="#" className="bg-white text-[#0e1b36] p-2 rounded-full hover:bg-gray-200 transition">
                        <span className="sr-only">Twitter</span>
                        <FaTwitter className="h-4 w-4" />
                    </a>
                    <a href="#" className="bg-white text-[#0e1b36] p-2 rounded-full hover:bg-gray-200 transition">
                        <span className="sr-only">Instagram</span>
                        <FaInstagram className="h-4 w-4" />
                    </a>
                    <a href="#" className="bg-white text-[#0e1b36] p-2 rounded-full hover:bg-gray-200 transition">
                        <span className="sr-only">Facebook</span>
                        <FaFacebookF className="h-4 w-4" />
                    </a>
                    <a href="#" className="bg-white text-[#0e1b36] p-2 rounded-full hover:bg-gray-200 transition">
                        <span className="sr-only">LinkedIn</span>
                        <FaLinkedinIn className="h-4 w-4" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
