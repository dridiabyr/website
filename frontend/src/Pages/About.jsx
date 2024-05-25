import React from "react";
import Layout from "../components/Layout/Layout";
import { Link } from "react-router-dom";
import "../components/Styles/about.css"
const About = () => {
  const handleSignUp = () => {
    console.log("SignUp clicked!");
  };

  const handleExploreRestaurants = () => {
    console.log("Explore restaurants clicked!");
  };

  const handleContactSupport = () => {
    console.log("Contact support clicked!");
  };

  return (
    <Layout>
      <div className="about-page">
        <h1 className="text">About Our Website</h1>
        <p className="mb-4">
          Welcome to our reservation restaurant and cafe website! We are
          dedicated to providing a convenient and enjoyable experience for our
          customers looking to dine out or grab a coffee.
        </p>
        <p className="mb-4">
          Our website allows users to browse through a variety of restaurants
          and cafes in the area, view their menus, and make reservations online.
          Whether you're planning a special dinner or just craving a cup of
          coffee, our website makes it easy to find the perfect spot.
        </p>
        <p className="mb-4">
          With our user-friendly interface, you can search for restaurants and
          cafes based on location, cuisine, or specific dishes. You can also
          read reviews from other users to help you make informed decisions
          about where to dine.
        </p>
        <p className="mb-4">
          We are committed to providing the best possible experience for our
          users, and we're constantly updating our website with new features and
          improvements. Whether you're a food enthusiast or just looking for a
          great place to eat, we hope you enjoy using our website to discover
          new dining experiences.
        </p>
        <p className="mb-4">Thank you for choosing our website!</p>

        <div className="button-group">
          <Link to="/signup">
            <button
              onClick={handleSignUp}
              className="btn"
            >
              Sign Up
            </button>{" "}
          </Link>
          <Link to="/restaurant-explore">
            <button
              onClick={handleExploreRestaurants}
              className="btn"
            >
              Explore Restaurants
            </button>
          </Link>
          <button
            onClick={handleContactSupport}
            className="btn"
          >
            Contact Support
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default About;
