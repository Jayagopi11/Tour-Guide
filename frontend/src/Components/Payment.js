import React from 'react';
import { useLocation } from 'react-router-dom';
import './Payment.css';

const Payment = () => {
    const location = useLocation();
    const { bookingData, totalPrice } = location.state || {};

    if (!bookingData) {
        return (
            <div className="container mt-5 text-center">
                <h3 className="text-danger">No booking data available</h3>
            </div>
        );
    }

    const handlePayment = () => {
        const options = {
            key: "rzp_test_EPupCME1guz73J",
            amount: totalPrice * 100,
            currency: "INR",
            name: "Jai's Holidays",
            description: `Booking for ${bookingData.place.title}`,
            image: "https://your-logo-url.com/logo.png",
            handler: function (response) {
                alert("Payment Successful! ID: " + response.razorpay_payment_id);
            },
            prefill: {
                name: bookingData.name,
                email: bookingData.email,
                contact: bookingData.phno,
            },
            theme: {
                color: "#3399cc",
            },
        };

        const rzp = new window.Razorpay(options);
        rzp.open();
    };
    
    return (
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-md-8 col-lg-6">
                    <div className="card shadow-lg rounded-4">
                        <div className="card-body p-4">
                            <h2 className="card-title text-center text-primary mb-4">Payment Details</h2>

                            <div className="mb-4">
                                <h5 className="text-dark">Booking Summary</h5>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><strong>Name:</strong> {bookingData.name}</li>
                                    <li className="list-group-item"><strong>Email:</strong> {bookingData.email}</li>
                                    <li className="list-group-item"><strong>Phone:</strong> {bookingData.phno}</li>
                                    <li className="list-group-item"><strong>Destination:</strong> {bookingData.place.title}</li>
                                    <li className="list-group-item"><strong>Date:</strong> {bookingData.date}</li>
                                    <li className="list-group-item"><strong>No. of People:</strong> {bookingData.people}</li>
                                    <li className="list-group-item bg-light fs-5">
                                        <strong>Total Amount:</strong> <span className="text-success">₹{totalPrice}</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="mb-4">
                                <h5 className="text-dark">Choose Payment Method</h5>
                                <div className="form-check mt-2">
                                    <input className="form-check-input" type="radio" name="paymentMethod" id="upi" />
                                    <label className="form-check-label" htmlFor="upi">UPI (Google Pay / PhonePe)</label>
                                </div>
                                <div className="form-check mt-2">
                                    <input className="form-check-input" type="radio" name="paymentMethod" id="card" />
                                    <label className="form-check-label" htmlFor="card">Credit / Debit Card</label>
                                </div>
                                <div className="form-check mt-2 mb-3">
                                    <input className="form-check-input" type="radio" name="paymentMethod" id="netbanking" />
                                    <label className="form-check-label" htmlFor="netbanking">Net Banking</label>
                                </div>
                            </div>
                            <button className="btn btn-success btn-lg w-100 rounded-pill shadow-sm" onClick={handlePayment}>
                                Proceed to Pay ₹{totalPrice}
                            </button>
                        </div>
                    </div>
                    <p className="text-center mt-4 text-muted" style={{ fontSize: '0.9rem' }}>
                        Payments are 100% secure and encrypted 🔒
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Payment;
