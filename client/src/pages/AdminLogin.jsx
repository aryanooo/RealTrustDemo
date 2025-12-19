
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        // Simple hardcoded auth for demo purposes as per assignment scope
        if (password === 'admin123') {
            localStorage.setItem('isAdmin', 'true');
            navigate('/admin/dashboard');
        } else {
            alert('Invalid Password');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
                <h2 className="text-2xl font-bold text-center text-primary mb-6">Admin Login</h2>
                <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                        <input
                            type="password"
                            placeholder="Enter Password (admin123)"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-primary text-white py-2 rounded-lg hover:bg-blue-900 transition"
                    >
                        Login
                    </button>
                    <p className="text-xs text-center text-gray-500">Hint: admin123</p>
                </form>
            </div>
        </div>
    );
};

export default AdminLogin;
