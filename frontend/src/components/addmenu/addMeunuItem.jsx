import React, { useState } from "react";
import axios from "axios";
import "./AddMenuItem.css"; // Importing CSS file

const AddMenuItem = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Form data:", formData); // Log formData to check if it's correct
      const response = await axios.post("http://localhost:3000/api/menus", formData); // Await the response
      console.log(response.data);
      alert("Menu added successfully");
      // You can perform further actions after adding to the database here
    } catch (error) {
      console.error("Error adding menu item:", error);
    }
  };
  

  return (
    <div className="add-menu-container">
      {" "}
      {/* Added className for styling */}
      <h2>Add New Menu Item</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Description:
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </label>
        <label>
          Price:
          <input
            type="text"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
};

export default AddMenuItem;
