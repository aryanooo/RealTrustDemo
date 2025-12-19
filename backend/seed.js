const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Project = require('./models/Project');
const Client = require('./models/Client');

dotenv.config();

const projects = [
  {
    title: 'Consulting',
    description: 'Expert advice to navigate the complex real estate market with confidence.',
    image: 'https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Design',
    description: 'Innovative architectural and interior design solutions tailored to your lifestyle.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Marketing & Design',
    description: 'A holistic approach combining aesthetic excellence with strategic market positioning.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Consultation & Marketing',
    description: 'Strategic consultation paired with aggressive marketing to maximize your property value.',
    image: 'https://images.unsplash.com/photo-1512915922610-d313a4e38505?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Consultation',
    description: 'Personalized consultation services to address your unique real estate needs.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }
];

const clients = [
  {
    name: 'Sarah Johnson',
    designation: 'Homeowner',
    location: 'Beverly Hills, CA',
    description: 'Real Trust helped us find our dream home! Their team was professional, patient, and understood exactly what we were looking for.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
  },
  {
    name: 'Michael Chen',
    designation: 'Property Investor',
    location: 'New York, NY',
    description: 'I have worked with many real estate agencies, but Real Trust stands out. Their market insights and ROI analysis are top-notch.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
  },
  {
    name: 'Emily Davis',
    designation: 'Architect',
    location: 'Austin, TX',
    description: 'As an architect, I appreciate their eye for design and detail. They truly care about the aesthetic and functional quality.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
  },
  {
    name: 'David Wilson',
    designation: 'Software Engineer',
    location: 'San Francisco, CA',
    description: 'The process was incredibly smooth. They handled everything from the initial search to the final closing paperwork.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
  },
  {
    name: 'Jessica Lee',
    designation: 'Interior Designer',
    location: 'Miami, FL',
    description: 'I love collaborating with Real Trust. They understand the value of design and how it impacts property value.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
  }

];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB Atlas...');

    // Clear existing data (optional, be careful!)
    await Project.deleteMany({});
    await Client.deleteMany({});

    await Project.insertMany(projects);
    console.log('Projects Seeded');

    await Client.insertMany(clients);
    console.log('Clients Seeded');

    console.log('Database Populated Successfully');
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seedDB();
