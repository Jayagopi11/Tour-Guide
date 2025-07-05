require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');

const bookingRoutes = require('./routes/BookingRoutes');
const userRoutes = require('./routes/Users');
const adminRoutes = require('./routes/admin');
const app = express();

// ========Middleware
app.use(cors());
app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB Connected'))
.catch(err => console.error('❌ MongoDB connection error:', err));

console.log('JWT_SECRET:', process.env.JWT_SECRET);

app.use('/api/admin', adminRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/users', userRoutes);

const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

const Contact = mongoose.model("Contact", contactSchema);

app.post("/api/contact", async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.status(201).json({ message: "Message sent successfully!" });
  } catch (err) {
    res.status(500).json({ error: "Failed to send message." });
  }
});

// POST /api/admin/addplace
app.post('/api/admin/addplace', async (req, res) => {
  try {
    const { title, description, image, price } = req.body;
    const newPlace = new Place({ title, description, image, price });
    await newPlace.save();
    res.status(201).json({ message: 'Place added successfully!' });
  } catch (err) {
    console.error('Error adding place:', err);
    res.status(500).json({ message: 'Error adding place' });
  }
});

app.get('/search', async (req, res) => {
  const query = req.query.query;
  if (!query) return res.status(400).json({ error: 'Missing query' });

  try {
    const response = await axios.get('https://api.locationiq.com/v1/autocomplete', {
      params: {
        key: process.env.LOCATIONIQ_API_KEY,
        q: query,
        format: 'json',
      },
    });

    res.json(response.data);
  } catch (error) {
    console.error('API Error:', error.message);
    res.status(500).json({ error: 'Failed to fetch from LocationIQ' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
