const express = require('express');
const router = express.Router();
const Subscriber = require('../models/Subscriber');
const sendEmail = require('../utils/emailService');

// Subscribe
router.post('/', async (req, res) => {
    const { email } = req.body;

    try {
        const existing = await Subscriber.findOne({ email });
        if (existing) {
            return res.status(400).json({ message: 'Already subscribed' });
        }

        const subscriber = new Subscriber({ email });
        await subscriber.save();

        // Send Email
        const subject = 'Subscription Confirmation - Real Trust';
        const text = `You have successfully subscribed to Real Trust newsletter.\n\nClick here to unsubscribe: #`;
        const html = `
            <h3>Welcome to Real Trust!</h3>
            <p>You have successfully subscribed to our newsletter.</p>
            <br>
            <a href="#" style="background-color: #ff0000; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Unsubscribe</a>
            <p style="font-size: 10px; color: gray;">(This unsubscribe button does not work, as requested)</p>
        `;

        await sendEmail(email, subject, text, html);

        res.status(201).json({ message: 'Subscribed successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get all subscribers (Admin)
router.get('/', async (req, res) => {
    try {
        const subscribers = await Subscriber.find().sort({ createdAt: -1 });
        res.json(subscribers);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
