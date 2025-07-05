import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import AllBookings from '../Components/AllBookings';
import Admindashboard from './Admindashboard';
import AddPlace from './AddPlace';

const AdminPanel = () => {

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div className="bg-dark text-white p-4 vh-100" style={{ width: '240px' }}>
        <h4 className="text-center mb-4">Admin Panel</h4>
        <ul className="nav flex-column">
          <li className="nav-item mb-2">
            <Link className="nav-link text-white" to="/admin/dashboard">Dashboard</Link>
          </li>
          <Link className="nav-link text-white" to="/admin/bookings">Bookings</Link>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/admin/addplace">Add Places</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/">Go to Home</Link>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="container py-4">
       
        <Routes>
        <Route path='/dashboard' element={<Admindashboard/>} />
          <Route path="/bookings" element={<AllBookings />} />
          <Route path="/addplace" element={<AddPlace />} />
        </Routes>

      </div>
    </div>
  );
};

export default AdminPanel;
