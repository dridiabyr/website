import React from 'react';
import { NavLink } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/api/reservations">Gérer les réservations</NavLink>
          </li>
          <li>
            <NavLink to="/admin/calendars">Gérer les calendriers</NavLink>
          </li>
          <li> 
            <NavLink to="/admin/" ></NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default AdminDashboard;
