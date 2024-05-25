import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import "../Styles/Footer.css"
import { NavLink } from "react-router-dom";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:your@email.com?subject=Contact%20Us&body=Email:%20 ${email}`;
  };

  return (
    <>
      <Box textAlign={"center"} bgcolor={"black"}>
        <div className="container">
          <Typography className="footer" color={"white"}>
            <h1> let's eat together </h1>
            <p> Save and Subscribe </p>
            <span>
              You'll have access to exclusive discounts, special events
            </span>
            <p></p>
            <form onSubmit={handleSubmit}>
              {" "}
              <input
                type="email"
                className="email"
                value={email}
                placeholder="Type your Email "
                onChange={handleEmailChange}
              />
              <button type="submit">Submit</button>
            </form>
          </Typography>
          <div className="quick-links">
            <Typography color={"white"}>
              <h4>Quick Links</h4>
              <ul>
                <li>
                  <NavLink to={"/"}> My Account</NavLink>
                </li>
                <li>
                  <NavLink to={"/menu"}> FAQs</NavLink>
                </li>
                <li>
                  <NavLink to={"/about"}> Booking</NavLink>
                </li>
                <li>
                  <NavLink to={"/contact"}> Join Our Team</NavLink>
                </li>
                <li>
                  <NavLink to={"/contact"}> Contacts</NavLink>
                </li>
              </ul>
            </Typography>
          </div>
        </div>

        <Typography color={"white"}>&copy; 2024 All rights Reserved</Typography>
        <Box style={{ cursor: "pointer" }}>
          {/* {Icons} */}
          <InstagramIcon
            className="menu-icon"
            style={{ color: "whitesmoke" }}
          />
          <TwitterIcon className="menu-icon" style={{ color: "whitesmoke" }} />
          <FacebookIcon className="menu-icon" style={{ color: "whitesmoke" }} />
        </Box>
      </Box>
    </>
  );
};

export default Footer;
