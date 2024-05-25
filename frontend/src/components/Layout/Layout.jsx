import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Login from "../LoginPopUp/Login"

const Layout = ({ children }) => {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      <Header setShowLogin={setShowLogin} />
   {showLogin ? <Login   setShowLogin={setShowLogin}/> : <></>}
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
