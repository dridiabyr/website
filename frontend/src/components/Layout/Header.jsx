import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import FastFoodIcon from "@mui/icons-material/Fastfood";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, NavLink } from "react-router-dom";
import "../Styles/HeaderStyles.css"

const Header = ({setShowLogin, showLogin}) => {

  const [mobileOpen, setMobileOpen] = useState(false);
  //handle menu click
  const handleDrawerClick = () => {
    setMobileOpen(!mobileOpen);
  };
  const drawer = (
    <Box onClick={handleDrawerClick} sx={{ textAlign: "center" }}>
      <Typography
        color={"goldenrod"}
        component={"div"}
        variant="h6"
        sx={{ flexGrow: 1, my: 2 }}
      >
        <FastFoodIcon />
        BookyNET
      </Typography>

      <ul className="mobile-navigation">
        <li>
          <Link to={"/"}> Home</Link>
        </li>
        <li>
          <Link to={"/menu"}> Menu</Link>
        </li>
        <li>
          <Link to={"/about"}> About</Link>
        </li>
        <li>
          <Link to={"/contact"}> Contact</Link>
        </li>
        <li>
          <Link to={"/reservations"}>Reservations</Link>
        </li>
      </ul>
    </Box>
  );
  return (
    <>
      <Box>
        <AppBar sx={{ bgcolor: "black" }} component={"nav"}>
          <Toolbar>
            <IconButton
              edge="start"
              style={{ color: "white" }}
              onClick={handleDrawerClick}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              color={"goldenrod"}
              component="div"
              variant="h6"
              sx={{ flexGrow: 1 }}
            >
              <FastFoodIcon />
              BookyNET
            </Typography>
            <Divider />
            <Box sx={{ display: { xs: "none", sm: "block " } }}>
              <ul className="Navigation-menu">
                <li>
                  <NavLink to={"/"}> Home</NavLink>
                </li>
                <li>
                  <NavLink to={"/menu"}> Menu</NavLink>
                </li>
                <li>
                  <NavLink to={"/about"}> About</NavLink>
                </li>
                <li>
                  <NavLink to={"/contact"}> Contact</NavLink>
                </li>
                <li>
                  <NavLink to={"/reservations"}>Reservations</NavLink>
                </li>
                <li>
                  <button>
                    <a href="/login">Log IN</a>
                  </button>
                </li>
                <li>
                  <button onClick={()=> setShowLogin(true)}>
                    
                    <Link to="/signup" className="text-white mr-4" > Sign Up</Link>
                  </button>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerClick}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box>
          <Toolbar />
        </Box>
      </Box>
    </>
  );
};

export default Header;
