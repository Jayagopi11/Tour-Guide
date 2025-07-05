const express = require('express');
const Booking = require('../models/Booking')
const router = express.Router();

router.post('/', async (req, res) => {
    const { name, email, phno, date, people, place } = req.body;
    try {
        const newBooking = new Booking({
            name,
            email,
            phno,
            date,
            people,
            place,
        });

        await newBooking.save();

        res.status(201).json({ message: 'Booking Confirmed!', booking: newBooking });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server error' })
    }
})
module.exports = router;