import React from "react";
import "./FoodItem.css";
import star_rating from "../../assets/assets";
const FoodItem = ({ id, name, price, description, image }) => {
  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img className="food-item-img" src={image} alt="" />
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img className="star" src={star_rating} alt=""/>
        </div>
        <div className="food-item-description-rating">
          <p>{description}</p>
        </div>
        <div className="food-item-price-rating">
          <p>{price}</p>
        </div>

      </div>
    </div>
  );
};

export default FoodItem;
