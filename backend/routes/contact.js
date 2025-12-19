const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// Submit Contact Form
router.post('/', async (req, res) => {
    const { name, email, mobile, city } = req.body;
    const contact = new Contact({
        name,
        email,
        mobile,
        city
    });

    try {
        const newContact = await contact.save();
        res.status(201).json(newContact);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Get all contacts (Admin)
router.get('/', async (req, res) => {
    try {
        const contacts = await Contact.find().sort({ createdAt: -1 });
        res.json(contacts);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
