import React, { useContext } from "react";

import FoodItem from "../foodItem/FoodItem";
import "./FoodDisplay.css";

import { StoreContext } from "../context/storeContext";

const FoodDisplay = ({ category }) => {
  const contextValue = useContext(StoreContext);
  const food_list = contextValue.food_list || [];

  return (
    <div className="food-display" id="food-display">
      <h2>Top dishes near you</h2>

      <div className="food-display-list">
        {food_list.map((item, index) => {
          return (
            <FoodItem
              key={index}
              id={item._id}
              name={item.name}
              price={item.price}
              description={item.description}
              image={item.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
