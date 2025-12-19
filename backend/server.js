require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Database Connection
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/flipr_db')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));

// Routes (to be added)
const projectRoutes = require('./routes/projects');
const clientRoutes = require('./routes/clients');
const contactRoutes = require('./routes/contact');
const subscriberRoutes = require('./routes/subscribe');

app.use('/api/projects', projectRoutes);
app.use('/api/clients', clientRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/subscribe', subscriberRoutes);

app.get('/', (req, res) => {
    res.send('API is running...');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
