import React from 'react';
import Logo from "../assets/pizzaLogo.png";

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="leftSide"></div>
        <img src={Logo} />
        <div className="rightSide"></div>
        
        </div>
  )
}

export default Navbar