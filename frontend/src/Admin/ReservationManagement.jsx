import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../components/Styles/reservationmngmt.css";

const ReservationManagement = () => {
  const [reservations, setReservations] = useState([]);
  const [formData, setFormData] = useState({
    user: '',
    restaurant: '',
    table: '',
    date: '',
  });

  useEffect(() => {
    // Fetch reservations on component mount
    const fetchReservations = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/reservations');
        setReservations(response.data);
      } catch (error) {
        console.error('Error fetching reservations:', error);
      }
    };

    fetchReservations();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/reservations', formData);
      setReservations([...reservations, response.data]);
      setFormData({
        user: '',
        restaurant: '',
        table: '',
        date: '',
      });
    } catch (error) {
      console.error('Error creating reservation:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/reservations/${id}`);
      setReservations(reservations.filter(reservation => reservation._id !== id));
    } catch (error) {
      console.error('Error deleting reservation:', error);
    }
  };

  return (
    <div className="reservation-management">
      <h1>Reservation Management</h1>
      <form onSubmit={handleSubmit} className="reservation-form">
        <input
          type="text"
          name="user"
          placeholder="User ID"
          value={formData.user}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="restaurant"
          placeholder="Restaurant ID"
          value={formData.restaurant}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="table"
          placeholder="Table ID"
          value={formData.table}
          onChange={handleChange}
          required
        />
        <input
          type="datetime-local"
          name="date"
          placeholder="Date"
          value={formData.date}
          onChange={handleChange}
          required
        />
        <button type="submit">Add Reservation</button>
      </form>
      <ul className="reservation-list">
        {reservations.map(reservation => (
          <li key={reservation._id}>
            {reservation.user} - {reservation.restaurant} - {reservation.table} - {new Date(reservation.date).toLocaleString()}
            <button onClick={() => handleDelete(reservation._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReservationManagement;
