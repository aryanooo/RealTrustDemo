const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
    name: { type: String, required: true },
    designation: { type: String, required: true },
    description: { type: String, required: true }, // Testimonial text
    image: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Client', clientSchema);
