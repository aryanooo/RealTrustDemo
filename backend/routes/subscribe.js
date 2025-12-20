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
        const subject = 'Welcome to Real Trust Insider! 🏡';
        const text = `Welcome to Real Trust!\n\nYou have successfully subscribed to our newsletter. Get ready for exclusive updates on market trends and design tips.\n\nUnsubscribe: #`;

        const html = `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px; background-color: #ffffff;">
                <h2 style="color: #1E3A8A; text-align: center; margin-bottom: 20px;">Welcome to Real Trust</h2>
                <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
                <p style="font-size: 16px; color: #333;">Hello!</p>
                <p style="font-size: 16px; color: #555; line-height: 1.6;">
                    You are now officially subscribed to our <strong>Newsletter</strong>. We are thrilled to have you with us!
                </p>
                <p style="font-size: 16px; color: #555; line-height: 1.6;">
                    Get ready for exclusive updates on:
                </p>
                <ul style="color: #555; line-height: 1.6;">
                    <li>Latest Real Estate Market Trends</li>
                    <li>Premium Interior Design Tips</li>
                    <li>Exclusive Investment Opportunities</li>
                </ul>
                <div style="text-align: center; margin: 30px 0;">
                    <a href="https://real-trust-demo.vercel.app" style="background-color: #3B82F6; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; font-weight: bold; font-size: 16px;">Visit Our Website</a>
                </div>
                <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
                <p style="text-align: center; font-size: 14px; color: #999; margin-bottom: 10px;">
                    Want to stop receiving these emails?
                </p>
                <p style="text-align: center;">
                    <a href="#" style="color: #999; text-decoration: underline; font-size: 12px;">Unsubscribe</a>
                </p>
            </div>
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
