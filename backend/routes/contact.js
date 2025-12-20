const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');
const sendEmail = require('../utils/emailService');

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

        // Send Email
        const subject = 'Thank you for registering with Real Trust';
        const text = `Hello ${name},\n\nThank you for reaching out! We have registered your request and will provide you with free consultation information shortly via another email.\n\nBest regards,\nReal Trust Team`;
        const html = `
            <h3>Hello ${name},</h3>
            <p>Thank you for reaching out!</p>
            <p>We have registered your request and will provide you with <strong>free consultation information</strong> shortly via another email.</p>
            <br>
            <p>Best regards,</p>
            <p><strong>Real Trust Team</strong></p>
        `;

        await sendEmail(email, subject, text, html);

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
