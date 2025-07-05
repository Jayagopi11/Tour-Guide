const express = require('express');
const Booking = require('../models/Booking');  // Ensure correct model path
const router = express.Router();

// Get all bookings for admin
router.get('/bookings', async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.json(bookings);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
