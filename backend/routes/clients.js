const express = require('express');
const router = express.Router();
const Client = require('../models/Client');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: './uploads/',
    filename: function (req, file, cb) {
        cb(null, 'client-' + Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({ storage: storage });

router.get('/', async (req, res) => {
    try {
        const clients = await Client.find().sort({ createdAt: -1 });
        res.json(clients);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.post('/', upload.single('image'), async (req, res) => {
    const { name, designation, description } = req.body;
    const image = req.file ? req.file.path : '';

    const client = new Client({
        name,
        designation,
        description,
        image
    });

    try {
        const newClient = await client.save();
        res.status(201).json(newClient);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        await Client.findByIdAndDelete(req.params.id);
        res.json({ message: 'Client deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
