import React, { useState } from 'react';
import axios from 'axios';

const AddPlace = () => {
    const [place, setPlace] = useState({
        title: '',
        image: '',
        description: '',
        price: '',
        location: '',
        duration: '',
        rating: '',
        bestTimeToVisit: '',
        highlights: '',
        thingsToDo: ''
    });

    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setPlace({ ...place, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const formattedPlace = {
            ...place,
            rating: parseFloat(place.rating),
            price: parseInt(place.price),
            highlights: place.highlights.split(',').map(item => item.trim()),
            thingsToDo: place.thingsToDo.split(',').map(item => item.trim())
        };

        axios.post('http://localhost:5000/api/admin/addplace', formattedPlace)
            .then(res => {
                setMessage('Place added successfully!');
                setPlace({
                    title: '',
                    image: '',
                    description: '',
                    price: '',
                    location: '',
                    duration: '',
                    rating: '',
                    bestTimeToVisit: '',
                    highlights: '',
                    thingsToDo: ''
                });
            })
            .catch(err => {
                console.error('Error adding place:', err);
                setMessage('Failed to add place');
            });
    };

    return (
        <div className="container mt-3" style={{ overflowY: 'auto', maxHeight: '900px' }}>
            <h2 className="mb-4 text-primary text-center">Add New Place</h2>
            {message && <div className="alert alert-info">{message}</div>}
            <form onSubmit={handleSubmit} className="shadow p-4 rounded bg-light">

                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input type="text" className="form-control" name="title" value={place.title} onChange={handleChange} required />
                </div>

                <div className="mb-3">
                    <label className="form-label">Image URL</label>
                    <input type="text" className="form-control" name="image" value={place.image} onChange={handleChange} required />
                </div>

                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea className="form-control" name="description" value={place.description} onChange={handleChange} required />
                </div>

                <div className="mb-3">
                    <label className="form-label">Price (INR)</label>
                    <input type="number" className="form-control" name="price" value={place.price} onChange={handleChange} required />
                </div>

                <div className="mb-3">
                    <label className="form-label">Location</label>
                    <input type="text" className="form-control" name="location" value={place.location} onChange={handleChange} required />
                </div>

                <div className="mb-3">
                    <label className="form-label">Duration</label>
                    <input type="text" className="form-control" name="duration" value={place.duration} onChange={handleChange} required />
                </div>

                <div className="mb-3">
                    <label className="form-label">Rating</label>
                    <input type="number" step="0.1" className="form-control" name="rating" value={place.rating} onChange={handleChange} required />
                </div>

                <div className="mb-3">
                    <label className="form-label">Best Time to Visit</label>
                    <input type="text" className="form-control" name="bestTimeToVisit" value={place.bestTimeToVisit} onChange={handleChange} required />
                </div>

                <div className="mb-3">
                    <label className="form-label">Highlights (comma-separated)</label>
                    <input type="text" className="form-control" name="highlights" value={place.highlights} onChange={handleChange} required />
                </div>

                <div className="mb-3">
                    <label className="form-label">Things to Do (comma-separated)</label>
                    <input type="text" className="form-control" name="thingsToDo" value={place.thingsToDo} onChange={handleChange} required />
                </div>

                <button type="submit" className="btn btn-success w-100">Add Place</button>
            </form>
        </div>
    );
};

export default AddPlace;
