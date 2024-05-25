import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import banner from "../assets/banner.jpeg";
import chhola from '../assets/gujrati.jpeg';
import Layout from "../components/Layout/Layout";
import ExploreMenu from "../components/ExploreMenu/ExploreMenu";
import FoodDisplay from "../components/foodDisplay/FoodDisplay";
import RestaurantDisplay from "../restaurantDisplay/RestaurantDisplay";
import "../components/Styles/HomeStyle.css"
import RestaurantSearch from "../restaurantserach/RestaurantSearch";



const Home = () => {
  const [category, setCategory] = useState("All");
  // getAll()

  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="banner-container"
      >
        <div className="banner-overlay">
          <img
            className="banner-image"
            src={banner}
            alt="Banner"
          />
          <div className="banner-overlay-bg"></div>
        </div>
        <div className="banner-content">
          <motion.h1
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 120 }}
            className="banner-title"
          >
            Welcome to Our Food Website
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="banner-subtitle"
          >
            Order Delicious Food in Tunisia
          </motion.p>
          <Link
            to="/order"
            className="banner-button"
          >
            <motion.button>Order Now</motion.button>
          </Link>
        </div>
      </motion.div>

      <div className="restaurants-container">
        <h2 className="restaurants-title">
          Discover Some of the Best Restaurants
          <RestaurantSearch/>
        </h2>
        <div className="restaurants-grid">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: item * 0.2, duration: 0.5 }}
              className="restaurant-card"
            >
              <img
                src={chhola}
                alt={`rest ${item}`}
                className="restaurant-image"
              />
              <div className="restaurant-details">
                <h3 className="restaurant-name">
                  Restaurant {item}
                </h3>
                <p className="restaurant-description">
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} setCategory={setCategory} />
      <RestaurantDisplay category={category} setCategory={setCategory} />
    </Layout>
  );
};

export default Home;
