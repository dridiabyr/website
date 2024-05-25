import React, { useContext } from "react";
import "./RestaurantDisplay.css";


import RestaurantItem from "../restaurantItem/restaurantItem";
import { StoreContext } from "../components/context/storeContext";

const RestaurantDisplay = ({ category }) => {
  const contextValue = useContext(StoreContext);
  const restaurantList = contextValue.restaurantList || [];

  return (
    <div className="restaurant-display" id="food-display">
      <h2>Top Restaurants For you : </h2>

      <div className="restaurant-display-list">
        {restaurantList.map((item, index) => {
          return (
            <RestaurantItem
              key={index}
              id={item._id}
              name={item.name}
              price={item.rating}
              description={item.location}
              image={item.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantDisplay;
