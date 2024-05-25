import { useState } from "react";
import { menulist } from "../assets/assets";
import { Link } from "react-router-dom";
import Footer from "../components/Layout/Footer";
import "../components/Styles/Menuc.css"
import Header from "../components/Layout/Header";
import AddMenuItem from "../components/addmenu/addMeunuItem";
const Menu = () => {
  const [category, setCategory] = useState("All");

  return (
    <div>
      <Header/>
    <div className="menu">

      <h1 className="text-3xl font-bold text-center mb-4">Explore our Menu</h1>
      <p className="text-lg text-center mb-8">
        Choose from a diverse featuring a detectable array of dishes. Our
        mission is to satisfy your cravings and elevate your dining experience,
        one delicious meal at a Time.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {menulist.map((item, index) => (
          <Link to="/order" key={index} className="explore-menu-item">
            <div
              onClick={() => {
                setCategory(prev => (prev === item.menu_name ? "All" : item.menu_name));
              }}
              className={`relative overflow-hidden rounded-lg transition duration-300 transform ${
                category === item.menu_name ? "scale-105" : ""
              }`}
            >
              <img
                src={item.menu_image}
                alt=""
                className="w-full h-auto transition duration-300 transform hover:scale-105"
              />
              <p className="absolute inset-x-0 bottom-0 bg-gray-800 bg-opacity-75 text-white text-center py-2">
                {item.menu_name}
              </p>
            </div>
          </Link>
        ))}
      </div>
      <AddMenuItem/>
      
    </div>
    <Footer/>
    </div>
  );
};

export default Menu;
