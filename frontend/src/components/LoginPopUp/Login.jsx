// LoginPage.js
import React, { useState } from "react";
import Footer from "../Layout/Footer";
import { FaGoogle, FaFacebook, FaTwitter } from "react-icons/fa";
import './Login.css'
import Header from "../Layout/Header";
const Login = ({setShowLogin}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch("http://localhost:3000/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("token", data.token); 
        window.location.href = "/dashboard";
      } else {
        const errorData = await response.json();
        console.error("Login failed", errorData.message);
      }
    } catch (error) {
      console.error("Login failed", error);
    }
  };
  

  return (
    <div>

      <Header/>
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-96">
          <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="flex flex-col">
              <label htmlFor="email" className="text-gray-700">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="form-input mt-1"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="password" className="text-gray-700">
                Password:
              </label>
              <input
                type="password"
                id="password"
                name="password"
                required
                className="form-input mt-1"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Your password"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-full"
            >
              Login
            </button>
          </form>
          <div className="flex justify-between mt-4">
            <button
              onClick={() => handleLogin("Google")}
              className="text-blue-600 hover:text-blue-800"
            >
              <FaGoogle className="w-6 h-6 mr-1" />
              Sign in with Google
            </button>
            <button
              onClick={() => handleLogin("Facebook")}
              className="text-blue-600 hover:text-blue-800"
            >
              <FaFacebook className="w-6 h-6 mr-1" />
              Sign in with Facebook
            </button>
            <button
              onClick={() => handleLogin("Twitter")}
              className="text-blue-600 hover:text-blue-800"
            >
              <FaTwitter className="w-6 h-6 mr-1" />
              Sign in with Twitter
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
