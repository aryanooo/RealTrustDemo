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
        const subject = 'Confirmation: We Received Your Request - Real Trust';
        const text = `Dear ${name},\n\nThank you for choosing Real Trust! We have successfully received your request for a Free Consultation.\n\nOur team is reviewing your details and will send you personalized information shortly via a separate email.\n\nBest Regards,\nThe Real Trust Team`;

        const html = `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px; background-color: #ffffff;">
                <h2 style="color: #1E3A8A; text-align: center; margin-bottom: 20px;">Real Trust</h2>
                <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
                <p style="font-size: 16px; color: #333;">Dear ${name},</p>
                <p style="font-size: 16px; color: #555; line-height: 1.6;">
                    Thank you for choosing <strong>Real Trust</strong>! We have successfully received your request for a <strong>Free Consultation</strong>.
                </p>
                <p style="font-size: 16px; color: #555; line-height: 1.6;">
                    Our team of experts is already reviewing your inquiry. You can expect to receive a follow-up email from us shortly containing your personalized consultation information and next steps.
                </p>
                <p style="font-size: 16px; color: #555; line-height: 1.6;">
                    We look forward to helping you build your dream project.
                </p>
                <br>
                <div style="background-color: #f8fafc; padding: 15px; border-radius: 5px; border-left: 4px solid #F97316;">
                    <p style="margin: 0; color: #64748b; font-size: 14px;">"Real estate cannot be lost or stolen, nor can it be carried away. Purchased with common sense, paid for in full, and managed with reasonable care, it is about the safest investment in the world."</p>
                </div>
                <br>
                <p style="font-size: 14px; color: #888;">Best Regards,<br><strong>The Real Trust Team</strong></p>
            </div>
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
