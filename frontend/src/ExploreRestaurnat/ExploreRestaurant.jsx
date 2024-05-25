import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ExploreRestaurant = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetch("/api/restaurant")
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(data => setRestaurants(data))
      .catch(error => console.log("Error fetching restaurants:", error));
  }, []);

  return (
    <div className="explore-restaurant-page">
      <h1 className="text-3xl font-bold text-center mt-8 mb-4">Explore Restaurants</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        {restaurants.map(restaurant => (
          <div key={restaurant._id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{restaurant.name}</h2>
              <p className="text-gray-600">Cuisine: {restaurant.cuisine}</p>
            </div>
            <Link to={`/restaurant/${restaurant._id}`} className="block py-2 px-4 bg-yellow-500 text-white text-center font-semibold hover:bg-yellow-600 transition duration-300">
              View Menu
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreRestaurant;
