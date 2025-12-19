const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Project = require('./models/Project');
const Client = require('./models/Client');

dotenv.config();

const projects = [
  {
    title: 'Luxury Villa in Beverly Hills',
    description: 'A stunning 5-bedroom villa with panoramic views, infinity pool, and smart home integration. Designed for ultimate comfort and luxury.',
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Modern Downtown Apartment',
    description: 'Sleek and contemporary apartment in the heart of the city. Features open-plan living, floor-to-ceiling windows, and high-end finishes.',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Cozy Suburban Family Home',
    description: 'Perfect family home with a spacious backyard, modern kitchen, and close proximity to top-rated schools.',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }
];

const clients = [
  {
    name: 'Sarah Johnson',
    designation: 'Homeowner',
    description: 'Real Trust helped us find our dream home! Their team was professional, patient, and understood exactly what we were looking for.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
  },
  {
    name: 'Michael Chen',
    designation: 'Property Investor',
    description: 'I have worked with many real estate agencies, but Real Trust stands out. Their market insights and ROI analysis are top-notch.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
  },
  {
    name: 'Emily Davis',
    designation: 'Architect',
    description: 'As an architect, I appreciate their eye for design and detail. They truly care about the aesthetic and functional quality of the properties they sell.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
  }
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB Atlas...');

    // Clear existing data (optional, be careful!)
    // await Project.deleteMany({});
    // await Client.deleteMany({});

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
