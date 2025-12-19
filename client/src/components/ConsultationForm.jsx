
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
        <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full">
            <h3 className="text-2xl font-bold text-center text-primary mb-2">Get a Free Consultation</h3>
            <p className="text-center text-gray-500 mb-6 text-sm">Fill out the form and our team will get back to you within 24 hours.</p>

            {status === 'success' && <p className="text-green-600 text-center mb-4">Request sent successfully!</p>}
            {status === 'error' && <p className="text-red-600 text-center mb-4">Something went wrong. Try again.</p>}

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                </div>
                <div>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                </div>
                <div>
                    <input
                        type="text"
                        name="city"
                        placeholder="Town / City"
                        value={formData.city}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-secondary text-white font-bold py-3 rounded-lg hover:bg-orange-600 transition duration-300 transform hover:scale-105"
                >
                    Get Quick Quote
                </button>
            </form>
        </div>
    );
};

export default ConsultationForm;
