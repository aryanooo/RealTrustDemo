
import { useState } from 'react';
import axios from 'axios';

const ConsultationForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        city: ''
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/contact', formData);
            setStatus('success');
            setFormData({ name: '', email: '', mobile: '', city: '' });
        } catch (err) {
            console.error(err);
            setStatus('error');
        }
    };

    return (
        <div className="bg-[#1E3A8A]/90 backdrop-blur-sm p-8 rounded-lg shadow-2xl max-w-md w-full border border-white/20">
            <h3 className="text-xl font-bold text-center text-white mb-6">Get a Free<br />Consultation</h3>

            {status === 'success' && <p className="text-green-400 text-center mb-4 text-sm">Request sent successfully!</p>}
            {status === 'error' && <p className="text-red-400 text-center mb-4 text-sm">Something went wrong. Try again.</p>}

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 bg-transparent border border-white/30 rounded text-white placeholder-gray-300 focus:outline-none focus:border-white focus:ring-1 focus:ring-white/50 text-sm transition"
                    />
                </div>
                <div>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter Email Address"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 bg-transparent border border-white/30 rounded text-white placeholder-gray-300 focus:outline-none focus:border-white focus:ring-1 focus:ring-white/50 text-sm transition"
                    />
                </div>
                <div>
                    <input
                        type="tel"
                        name="mobile"
                        placeholder="Mobile Number"
                        value={formData.mobile}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 bg-transparent border border-white/30 rounded text-white placeholder-gray-300 focus:outline-none focus:border-white focus:ring-1 focus:ring-white/50 text-sm transition"
                    />
                </div>
                <div>
                    <input
                        type="text"
                        name="city"
                        placeholder="Area, City"
                        value={formData.city}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 bg-transparent border border-white/30 rounded text-white placeholder-gray-300 focus:outline-none focus:border-white focus:ring-1 focus:ring-white/50 text-sm transition"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-[#F97316] text-white font-bold py-3 rounded hover:bg-orange-600 transition duration-300 mt-4 text-sm"
                >
                    Get Quick Quote
                </button>
            </form>
        </div>
    );
};

export default ConsultationForm;
