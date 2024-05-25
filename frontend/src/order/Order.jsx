import React, { useState } from "react";
import './Order.css'
import axios from 'axios'
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";


const Order = () => {
  const [restaurant, setRestaurant] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/orders", {
        ...formData,
        restaurant
      });
      if (response.status === 200 || response.status === 201) {
        console.log("Order placed from restaurant!", restaurant);
        alert("Your order has been placed successfully");
      } else {
        console.error("Failed to place order");
        alert("Failed to place order");
      }
    } catch (error) {
      console.error("Failed to place order:", error);
      alert("Failed to place order");
    }
  };
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRestaurantChange = (e) => {
    setRestaurant(e.target.value);
  };

  return (
    <div> 
      <Header/>
    <div className="order-page bg-gray-100 py-8 px-4 md:px-8">
      <h1 className="text-3xl font-bold mb-4">Place your Order</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-lg font-semibold">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Put Your Name here ..."
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-yellow-500"
            required
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-lg font-semibold">
            E-mail:
          </label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Put Your Email here ..."
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-yellow-500"
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-lg font-semibold">
            Phone Number:
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="(+216) 55 555 555 ..."
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-yellow-500"
            required
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="address" className="block text-lg font-semibold">
            Address:
          </label>
          <input
            type="text"
            id="address"
            name="address"
            placeholder="253 Rue bvlgari ..."
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-yellow-500"
            required
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="restaurant" className="block text-lg font-semibold">
            Choose a restaurant:
          </label>
          <select
            id="restaurant"
            name="restaurant"
            value={restaurant}
            onChange={handleRestaurantChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-yellow-500"
            required
          >
            <option value="">Select a restaurant</option>
            <option value="restaurant1">Restaurant 1</option>
            <option value="restaurant2">Restaurant 2</option>
            <option value="restaurant3">Restaurant 3</option>
            <option value="restaurant4">Restaurant 4</option>
            <option value="restaurant5">Restaurant 5</option>
            <option value="restaurant6">Restaurant 6</option>
            <option value="restaurant7">Restaurant 7</option>
            <option value="restaurant8">Restaurant 8</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-yellow-500 text-white font-semibold py-2 rounded-md hover:bg-yellow-600 transition duration-300"
        >
          Place Order
        </button>
      </form>
    </div>
    <Footer/>
    </div>
  );
};

export default Order;
