import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import TableReservation from "../../tables/table";
import { useState } from 'react';
import axios from "axios";
import './reservation.css'


const ReservationForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [reservationSuccess, setReservationSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await axios.post('/api/createreservation', { reservationData: FormData });
      console.log(response.data.message);
      setReservationSuccess(true);
    } catch (error) {
      console.error('Error submitting reservation:', error);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="reservation-form-container">
      <Header />
      <div className="reservation-form-header">
      <div className="reservation-form-content">
          <h1 className="reservation-form-wrraper">Make a Reservation</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <TableReservation />
            </div>
            <button
              type="submit"
              className={`reservation-form-button ${
                isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Reservation'}
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ReservationForm;
