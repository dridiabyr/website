import React, { useState } from 'react';
import axios from 'axios';

const AddMenuItem = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response =  axios.post('/api/menu', formData);
      console.log(response.data); 
    } catch (error) {
      console.error('Error adding menu item:', error);
    }
  };

  return (
    <div>
      <h2>Add New Menu Item</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <label>
          Description:
          <textarea name="description" value={formData.description} onChange={handleChange} />
        </label>
        <label>
          Price:
          <input type="text" name="price" value={formData.price} onChange={handleChange} />
        </label>
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
};

export default AddMenuItem;
