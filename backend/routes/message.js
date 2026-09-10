const express = require('express');
const router = express.Router();
const Message = require("../models/Message");


router.get('/', async (req, res) => {
    const messages = await Message.find();
    res.json(messages);
})

router.post('/', async (req, res) => {
    const { name, email, idea, category, message } = req.body;
    const newMessage = new Message({ name, email, idea, category, message });
    await newMessage.save();
    res.status(201).json(newMessage);
})

module.exports = router;