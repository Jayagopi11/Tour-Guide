import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Bookingform = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { place } = location.state || {};

    const today = new Date().toISOString().split('T')[0];

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phno: '',
        date: '',
        people: 1,
    });

    const [isConfirmed, setIsConfirmed] = useState(false);
    const totalPrice = formData.people * parseInt(place?.price || 0);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: name === 'people' ? parseInt(value) : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        Swal.fire({
            title: 'Confirm Booking?',
            text: 'Do you want to confirm your booking with these details?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Yes, confirm it!',
            cancelButtonText: 'Cancel',
        }).then((result) => {
            if (result.isConfirmed) {
                setIsConfirmed(true);
                Swal.fire('Confirmed!', 'Please proceed to payment.', 'success');
            }
        });
    };

    const handleFinalSubmit = async () => {
        const bookingData = { ...formData, place };

        try {
            const response = await fetch('http://localhost:5000/api/bookings', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(bookingData),
            });

            const data = await response.json();
            if (response.ok) {
                Swal.fire({
                    icon: 'success',
                    title: 'Booking Successful!',
                    text: 'Redirecting to payment...',
                    timer: 2000,
                    showConfirmButton: false,
                });
                setTimeout(() => {
                    navigate('/payment', {
                        state: {
                            bookingData,
                            totalPrice
                        }
                    });
                }, 2000);
            } else {
                Swal.fire('Booking Failed', data.message || 'Something went wrong.', 'error');
            }
        } catch (error) {
            Swal.fire('Error', 'An error occurred while booking.', 'error');
            console.error(error);
        }
    };

    if (!place) {
        return <h2 className="mt-5 text-center text-danger">No destination selected.</h2>;
    }

    return (
        <div className="container my-3 ">
            <div className="row">
                <div className="col-md-6 mb-4 ">
                    <img
                        src={place.image}
                        alt={place.title}
                        className="img-fluid rounded-4 shadow-sm h-100"
                    />
                </div>

                <div className="col-md-6">
                    <h2 className="mb-3">
                        Book your trip to <span className="text-danger">{place.title}</span>
                    </h2>
                    <p className="mb-4">
                        <strong>Base Price:</strong> ₹{place.price} / Person
                    </p>

                    {!isConfirmed ? (
                        <form onSubmit={handleSubmit} className="bg-light p-3 rounded-4 shadow-sm">
                            <div className="form-group mb-3">
                                <label className="form-label">Name</label>
                                <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} required />
                            </div>
                            <div className="form-group mb-3">
                                <label className="form-label">Email</label>
                                <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} required />
                            </div>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Phone Number</label>
                                    <input type="number" className="form-control" name="phno" value={formData.phno} onChange={handleChange} required />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Date</label>
                                    <input type="date" className="form-control" name="date" min={today} value={formData.date} onChange={handleChange} required />
                                </div>
                            </div>
                            <div className="form-group mb-4">
                                <label className="form-label">Number of People</label>
                                <input type="number" min="1" className="form-control" name="people" value={formData.people} onChange={handleChange} required />
                            </div>
                            <div className="mb-3">
                                <strong>Total Price: </strong> ₹{totalPrice}
                            </div>
                            <button type="submit" className="btn btn-dark w-100 rounded-pill">Confirm Booking</button>
                        </form>
                    ) : (
                        <div className="bg-white p-4 rounded-4 shadow-lg">
                            <h4 className="text-success mb-3">Booking Confirmation</h4>
                            <div className="row">
                                <div className="col-sm-6">
                                    <p><strong>Name:</strong> {formData.name}</p>
                                    <p><strong>Email:</strong> {formData.email}</p>
                                    <p><strong>Phone:</strong> {formData.phno}</p>
                                </div>
                                <div className="col-sm-6">
                                    <p><strong>Destination:</strong> {place.title}</p>
                                    <p><strong>Date:</strong> {formData.date}</p>
                                    <p><strong>People:</strong> {formData.people}</p>
                                </div>
                            </div>
                            <hr />
                            <h5>Total Price: <span className="text-primary">₹{totalPrice}</span></h5>
                            <div className="d-flex gap-3 mt-4">
                                <button className="btn btn-success w-50 rounded-pill" onClick={handleFinalSubmit}>Proceed to Payment</button>
                                <button className="btn btn-outline-secondary w-50 rounded-pill" onClick={() => setIsConfirmed(false)}>Edit Details</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Bookingform;
