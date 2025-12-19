
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('projects');
    const [projects, setProjects] = useState([]);
    const [clients, setClients] = useState([]);
    const [contacts, setContacts] = useState([]);
    const [subscriptions, setSubscriptions] = useState([]);

    // Forms state
    const [newProject, setNewProject] = useState({ title: '', description: '', image: null });
    const [newClient, setNewClient] = useState({ name: '', designation: '', description: '', image: null });

    useEffect(() => {
        const isAdmin = localStorage.getItem('isAdmin');
        if (!isAdmin) navigate('/admin');
        fetchData();
    }, [navigate]);

    const fetchData = () => {
        axios.get('http://localhost:5000/api/projects').then(res => setProjects(res.data));
        axios.get('http://localhost:5000/api/clients').then(res => setClients(res.data));
        axios.get('http://localhost:5000/api/contact').then(res => setContacts(res.data));
        axios.get('http://localhost:5000/api/subscribe').then(res => setSubscriptions(res.data));
    };

    const handleLogout = () => {
        localStorage.removeItem('isAdmin');
        navigate('/admin');
    };

    // --- Project Handlers ---
    const handleProjectSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', newProject.title);
        formData.append('description', newProject.description);
        formData.append('image', newProject.image);

        try {
            await axios.post('http://localhost:5000/api/projects', formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            setNewProject({ title: '', description: '', image: null });
            fetchData();
            alert('Project Added');
        } catch (err) {
            console.error(err);
            alert('Error adding project');
        }
    };

    const handleDeleteProject = async (id) => {
        if (window.confirm('Delete project?')) {
            await axios.delete(`http://localhost:5000/api/projects/${id}`);
            fetchData();
        }
    };

    // --- Client Handlers ---
    const handleClientSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', newClient.name);
        formData.append('designation', newClient.designation);
        formData.append('description', newClient.description);
        formData.append('image', newClient.image);

        try {
            await axios.post('http://localhost:5000/api/clients', formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            setNewClient({ name: '', designation: '', description: '', image: null });
            fetchData();
            alert('Client Added');
        } catch (err) {
            console.error(err);
            alert('Error adding client');
        }
    };

    const handleDeleteClient = async (id) => {
        if (window.confirm('Delete client?')) {
            await axios.delete(`http://localhost:5000/api/clients/${id}`);
            fetchData();
        }
    };

    // --- Render Helpers ---
    const renderContent = () => {
        switch (activeTab) {
            case 'projects':
                return (
                    <div>
                        <h3 className="text-xl font-bold mb-4">Manage Projects</h3>
                        <form onSubmit={handleProjectSubmit} className="bg-gray-50 p-4 rounded-lg mb-8 space-y-4">
                            <input type="text" placeholder="Project Title" className="w-full p-2 border rounded" value={newProject.title} onChange={e => setNewProject({ ...newProject, title: e.target.value })} required />
                            <textarea placeholder="Description" className="w-full p-2 border rounded" value={newProject.description} onChange={e => setNewProject({ ...newProject, description: e.target.value })} required />
                            <input type="file" onChange={e => setNewProject({ ...newProject, image: e.target.files[0] })} required className="w-full" />
                            <button type="submit" className="bg-secondary text-white px-4 py-2 rounded hover:bg-orange-600">Add Project</button>
                        </form>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {projects.map(p => (
                                <div key={p._id} className="border p-4 rounded flex justify-between items-center bg-white shadow-sm">
                                    <div>
                                        <h4 className="font-bold">{p.title}</h4>
                                        <p className="text-sm text-gray-600 truncate w-48">{p.description}</p>
                                    </div>
                                    <button onClick={() => handleDeleteProject(p._id)} className="text-red-500 text-sm hover:underline">Delete</button>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            case 'clients':
                return (
                    <div>
                        <h3 className="text-xl font-bold mb-4">Manage Clients</h3>
                        <form onSubmit={handleClientSubmit} className="bg-gray-50 p-4 rounded-lg mb-8 space-y-4">
                            <input type="text" placeholder="Client Name" className="w-full p-2 border rounded" value={newClient.name} onChange={e => setNewClient({ ...newClient, name: e.target.value })} required />
                            <input type="text" placeholder="Designation" className="w-full p-2 border rounded" value={newClient.designation} onChange={e => setNewClient({ ...newClient, designation: e.target.value })} required />
                            <textarea placeholder="Testimonial" className="w-full p-2 border rounded" value={newClient.description} onChange={e => setNewClient({ ...newClient, description: e.target.value })} required />
                            <input type="file" onChange={e => setNewClient({ ...newClient, image: e.target.files[0] })} required className="w-full" />
                            <button type="submit" className="bg-secondary text-white px-4 py-2 rounded hover:bg-orange-600">Add Client</button>
                        </form>
                        <div className="space-y-4">
                            {clients.map(c => (
                                <div key={c._id} className="border p-4 rounded flex justify-between items-center bg-white shadow-sm">
                                    <div className="flex items-center space-x-4">
                                        <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden">
                                            {/* Image preview could go here */}
                                        </div>
                                        <div>
                                            <h4 className="font-bold">{c.name}</h4>
                                            <p className="text-xs text-gray-500">{c.designation}</p>
                                        </div>
                                    </div>
                                    <button onClick={() => handleDeleteClient(c._id)} className="text-red-500 text-sm hover:underline">Delete</button>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            case 'contacts':
                return (
                    <div>
                        <h3 className="text-xl font-bold mb-4">Contact Form Submissions</h3>
                        <div className="overflow-x-auto">
                            <table className="min-w-full bg-white border">
                                <thead>
                                    <tr className="bg-gray-100 text-left">
                                        <th className="p-3 border">Name</th>
                                        <th className="p-3 border">Email</th>
                                        <th className="p-3 border">Mobile</th>
                                        <th className="p-3 border">City</th>
                                        <th className="p-3 border">Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {contacts.map(c => (
                                        <tr key={c._id} className="border-b hover:bg-gray-50">
                                            <td className="p-3">{c.name}</td>
                                            <td className="p-3 text-blue-600">{c.email}</td>
                                            <td className="p-3">{c.mobile}</td>
                                            <td className="p-3">{c.city}</td>
                                            <td className="p-3 text-sm text-gray-500">{new Date(c.createdAt).toLocaleDateString()}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                );
            case 'subscriptions':
                return (
                    <div>
                        <h3 className="text-xl font-bold mb-4">Newsletter Subscriptions</h3>
                        <div className="bg-white border rounded overflow-hidden">
                            <ul>
                                {subscriptions.map(s => (
                                    <li key={s._id} className="p-3 border-b last:border-b-0 flex justify-between">
                                        <span>{s.email}</span>
                                        <span className="text-sm text-gray-500">{new Date(s.createdAt).toLocaleDateString()}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex">
            {/* Sidebar */}
            <aside className="w-64 bg-primary text-white flex-shrink-0">
                <div className="p-6">
                    <h1 className="text-2xl font-bold">Admin Panel</h1>
                </div>
                <nav className="mt-6 px-4 space-y-2">
                    <button onClick={() => setActiveTab('projects')} className={`block w-full text-left px-4 py-2 rounded ${activeTab === 'projects' ? 'bg-secondary' : 'hover:bg-blue-800'}`}>Projects</button>
                    <button onClick={() => setActiveTab('clients')} className={`block w-full text-left px-4 py-2 rounded ${activeTab === 'clients' ? 'bg-secondary' : 'hover:bg-blue-800'}`}>Clients</button>
                    <button onClick={() => setActiveTab('contacts')} className={`block w-full text-left px-4 py-2 rounded ${activeTab === 'contacts' ? 'bg-secondary' : 'hover:bg-blue-800'}`}>Contacts</button>
                    <button onClick={() => setActiveTab('subscriptions')} className={`block w-full text-left px-4 py-2 rounded ${activeTab === 'subscriptions' ? 'bg-secondary' : 'hover:bg-blue-800'}`}>Subscriptions</button>
                    <button onClick={handleLogout} className="block w-full text-left px-4 py-2 rounded hover:bg-red-600 mt-8">Logout</button>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-8 overflow-y-auto">
                {renderContent()}
            </main>
        </div>
    );
};

export default AdminDashboard;
