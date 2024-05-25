import React, { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate, Routes, Route } from "react-router-dom";
import AdminDashboard from "./AdminDashboard";
import ReservationManagement from "./ReservationManagement";
import CalendarManagement from "./CalendarManagement";

const AdminPage = () => {
  const [user, setUser] = useState(null);
  const location = useLocation();
  const Navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
    } else {
      Navigate.push("/login");
    }
  }, [Navigate]);

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
    Navigate.push("/login");
  };

  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/admin/dashboard">Dashboard</NavLink>
          </li>
          <li>
            <NavLink to="/admin/reservations">Gérer les réservations</NavLink>
          </li>
          <li>
            <NavLink to="/admin/calendars">Gérer les calendriers</NavLink>
          </li>
          <li>
            <button onClick={handleLogout}>Déconnexion</button>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/admin/dashboard" component={AdminDashboard} />
        <Route path="/admin/reservations" component={ReservationManagement} />
        <Route path="/admin/calendars" component={CalendarManagement} />
        <Route path="/admin" component={AdminDashboard} />
      </Routes>
    </div>
  );
};

export default AdminPage;
