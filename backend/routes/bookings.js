const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(cors());
app.use(bodyParser.json());


mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

const bookingRoutes = require('./routes/BookingRoutes');
const adminRoutes = require('./routes/admin');

app.get('/api/bookings', async (req, res) => {
  const bookings = await Booking.find().populate('place');
  res.json(bookings);
});
console.log(bookings)

app.listen(5000, () => console.log('Server running on port 5000'));
