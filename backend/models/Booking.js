const mongoose = require('mongoose')

const bookingSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phno: { type: Number, required: true },
    date: { type: Date, required: true },
    people: { type: Number, required: true },
    place: {
        title: { type: String, required: true },
        price: { type: Number, required: true },
    },
})

const Booking = mongoose.model('Booking', bookingSchema)

module.exports = Booking;