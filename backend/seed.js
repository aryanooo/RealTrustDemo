const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Project = require('./models/Project');
const Client = require('./models/Client');

dotenv.config();

const projects = [
  {
    title: 'Luxury Villa in Beverly Hills',
    description: 'A stunning 5-bedroom villa with panoramic views, infinity pool, and smart home integration. Designed for ultimate comfort and luxury.',
    image: '' // Will use placeholder if empty
  },
  {
    title: 'Modern Downtown Apartment',
    description: 'Sleek and contemporary apartment in the heart of the city. Features open-plan living, floor-to-ceiling windows, and high-end finishes.',
    image: ''
  },
  {
    title: 'Cozy Suburban Family Home',
    description: 'Perfect family home with a spacious backyard, modern kitchen, and close proximity to top-rated schools.',
    image: ''
  }
];

const clients = [
  {
    name: 'Sarah Johnson',
    designation: 'Homeowner',
    description: 'Real Trust helped us find our dream home! Their team was professional, patient, and understood exactly what we were looking for.',
    image: ''
  },
  {
    name: 'Michael Chen',
    designation: 'Property Investor',
    description: 'I have worked with many real estate agencies, but Real Trust stands out. Their market insights and ROI analysis are top-notch.',
    image: ''
  },
   {
    name: 'Emily Davis',
    designation: 'Architect',
    description: 'As an architect, I appreciate their eye for design and detail. They truly care about the aesthetic and functional quality of the properties they sell.',
    image: ''
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
