import axios from 'axios';
import React, { useEffect, useState } from 'react'
import PlacesAnalytics from '../Adminpanel/PlacesAnalytics'

const Admindashboard = () => {
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get("http://localhost:5000/api/admin/bookings")
      .then(res => setBookings(res.data))
      .catch(err => {
        console.error("Failed to fetch bookings", err);
        setError("Failed to fetch bookings");
      });
  }, []);

  // ✅ Only one definition of destinationStats
  const destinationStats = bookings.reduce((acc, booking) => {
    const place = booking.place?.title || booking.destination || "Unknown";
    acc[place] = (acc[place] || 0) + 1;
    return acc;
  }, {});

  const chartData = Object.entries(destinationStats).map(([name, value]) => ({
    name,
    value,
  }));
  return (
    <div>
      <div className="container py-4">
        <h2 className="mb-4">Booking Stats</h2>

        {error
          ? <p className="text-danger">{error}</p>
          : <PlacesAnalytics data={chartData} />
        }
      </div>

    </div>
  )
}

export default Admindashboard