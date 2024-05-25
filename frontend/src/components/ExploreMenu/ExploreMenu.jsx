import React from "react";
import { menulist } from "../../assets/assets";
import "./ExploreMenu.css";
const ExploreMenu = ({ category, setCategory }) => {
  
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore our Menu </h1>
      <p className="explore-menu-text">
        {" "}
        Choose from a diverse featuring a detectable array of dishes. Our
        mission is to satisfy your cravings and elevate your dining experience,
        one delicious meal at a Time.{" "}
      </p>
      <div className="explore-menu-list">
        {menulist.map((item, index) => {
          return (
            <div
              onClick={() => {
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                );
              }}
              key={index}
              className="explore-menu-item"
            >
              <img
                className={category === item.menu_name ? "active" : ""}
                src={item.menu_image}
                alt=""
              />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExploreMenu;
