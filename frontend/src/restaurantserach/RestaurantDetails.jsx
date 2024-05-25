import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const RestaurantDetails = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    const fetchRestaurant = async () => {
      try {
        const response = await fetch(`/api/restaurant/${id}`);
        const data = await response.json();
        setRestaurant(data);
      } catch (error) {
        console.error("Failed to fetch restaurant details:", error);
      }
    };

    fetchRestaurant();
  }, [id]);

  if (!restaurant) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{restaurant.name}</h1>
      <p>{restaurant.description}</p>
      <p>{restaurant.address}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default RestaurantDetails;
