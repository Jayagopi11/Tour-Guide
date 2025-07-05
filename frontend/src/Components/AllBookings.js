import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AllBookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/admin/bookings')  // 👈 put it here
      .then(res => {
        console.log("Fetched bookings:", res.data);
        setBookings(res.data);  // set state to show on UI
      })
      .catch(err => {
        console.error("Error fetching bookings:", err);
      });
  }, []);

  return (
    <div className="container mt-3"style={{ overflowY: 'auto', maxHeight: '600px' }}>
      <h2 className="text-center text-primary mb-4">All Booking Records</h2>

      {bookings.length === 0 ? (
        <p className="text-center text-danger">No bookings found.</p>
      ) : (
        <div className="table-responsive">
          <table className="table table-bordered table-hover text-center shadow-sm">
            <thead className="table-primary">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Destination</th>
                <th>Date</th>
                <th>People</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((b, index) => (
                <tr key={b._id}>
                  <td>{index + 1}</td>
                  <td>{b.name}</td>
                  <td>{b.email}</td>
                  <td>{b.phno}</td>
                  <td>{b.place?.title || 'N/A'}</td>
                  <td>{b.date}</td>
                  <td>{b.people}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AllBookings;
