import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import Menu from "./Pages/Menu";
import NtFound from "./Pages/NtFound";

import Order from "./order/Order.jsx";
import ExploreRestaurant from "./ExploreRestaurnat/ExploreRestaurant.jsx";
import "./App.css";
import AddMenuItem from "./addMeunuItem.jsx";
import SignUp from "./Signup/SignUp.jsx";
import Login from "./components/LoginPopUp/Login.jsx";
import AdminPage from "./Admin/AdminPage.jsx";
import ReservationForm from "./components/reservation/ReservationForm.jsx";

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
