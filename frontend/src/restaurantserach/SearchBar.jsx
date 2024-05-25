import React, { useState } from 'react';
import SearchBar from './SearchBar'; // Ensure the path is correct

const RestaurantSearch = () => {
  const [restaurants, setRestaurants] = useState([]);

  const handleSearch = async ({ lat, lng, distance }) => {
    try {
      const response = await fetch(
        `/api/restaurant/search?lat=${lat}&lng=${lng}&distance=${distance}`
      );
      const data = await response.json();
      setRestaurants(data);
    } catch (error) {
      console.error("Failed to fetch restaurants:", error);
    }
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <ul>
        {restaurants.map((restaurant) => (
          <li key={restaurant._id}>{restaurant.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantSearch;
