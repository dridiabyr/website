import React from "react";
import "./restaurantItem.css";


const RestaurantItem = ({ id, name, price,rating,location ,image }) => {
  return (
    <div className="restaurant-item">
      <div className="restaurant-item-img-container">
        <img className="restaurant-item-img" src={image} alt="" />
      </div>
      <div className="restaurant-item-info">
        <div className="restaurant-item-name-rating">
          <p>{name}</p>
          <p>{rating} </p>
        </div>
        <div className="restaurant-item-price-rating">
          <p>{price}</p>
        </div>
        <div className="restaurant-item-location-rating">
          <p>{location}</p>
        </div>
      </div>
      
    </div>
  );
};

export default RestaurantItem;
