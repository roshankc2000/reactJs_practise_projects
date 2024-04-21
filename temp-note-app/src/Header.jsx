import React from "react";
import logo from "./images/logo.png";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="brand_logo" height="80" width="auto" />
      <h1>Temp-Notes-App</h1>
    </div>
  );
};

export default Header;
