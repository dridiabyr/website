import React, { useState } from 'react';
import { motion } from 'framer-motion';

import './table.css'
const TableReservation = () => {
  const [selectedTable, setSelectedTable] = useState(null);
  const [name, setName] = useState('');
  const [tableNumber, setTableNumber] = useState('');
  const [reservationConfirmed, setReservationConfirmed] = useState(false);

  const tables = [
    { id: 1, number: 'Table 1' },
    { id: 2, number: 'Table 2' },
    { id: 3, number: 'Table 3' },
    { id: 4, number: 'Table 4' },
  ];

  const handleTableSelect = (tableId) => {
    setSelectedTable(tableId);
  };

  const handleReservation = () => {
    // Perform reservation logic here (e.g., send reservation details to server)
    setReservationConfirmed(true);
  };

  return (
    <div className="reservation-container">
      <h1 className="reservation-heading">Table Reservation</h1>
      <div className="reservation-grid">
        <div>
          <h2 className="available-tables-heading t">Available Tables</h2>
          <ul className="available-tables-grid">
            {tables.map((table) => (
              <motion.li
                key={table.id}
                onClick={() => handleTableSelect(table.id)}
                className={`table-item py-2 px-4 cursor-pointer relative group ${
                  selectedTable === table.id ? 'selected-table' : 'available-table'
                }`}
                whileHover={{ scale: 1.1 }}
              >
                <span>{table.number}</span>
                {selectedTable === table.id && (
                  <span className="selected-indicator">
                    Selected
                  </span>
                )}
              </motion.li>
            ))}
          </ul>
        </div>
        <div>
          {!reservationConfirmed ? (
            <div>
              <h2 className="make-reservation-heading">Make a Reservation</h2>
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="reservation-input "
              />
              <input
                type="text"
                placeholder="Table Number"
                value={tableNumber}
                onChange={(e) => setTableNumber(e.target.value)}
                className="reservation-input "
              />
              <button
                onClick={handleReservation}
                className="reservation-button "
              >
                Reserve
              </button>
            </div>
          ) : (
            <div className="reservation-confirmation text-xl font-semibold">
              <h2 className="reservation-confirmed-heading ">Reservation Confirmed</h2>
              <p>Your reservation for {tableNumber} is confirmed. Thank you, {name}!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TableReservation;
