import { Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import SignUp from "./Signup/SignUp";
import Login from "./components/LoginPopUp/Login";
import AdminPage from "./Admin/AdminPage";
import Menu from "./Pages/Menu";
import ReservationForm from "./components/reservation/ReservationForm";
import ExploreRestaurant from "./ExploreRestaurnat/ExploreRestaurant";
import Order from "./order/Order";
import AddMenuItem from "./addMeunuItem";
import NtFound from "./Pages/NtFound";

function App() {
  return (
    <>
      <div>
        {" "}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />

          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />

          <Route path="/admin" element={<AdminPage />} />

          <Route path="menu" element={<Menu />} />
          <Route path="/reservations" element={<ReservationForm />} />
          <Route path="/reservations/:id" element={<ReservationForm />} />
          <Route path="/restaurant-explore" element={<ExploreRestaurant />} />
          <Route path="/order" element={<Order />} />
          <Route path="/addMenuItem" element={<AddMenuItem />} />

          <Route path="*" element={<NtFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
