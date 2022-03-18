import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./NavbarStyles.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click); //not clicked as default

  //CHANGE COLOUR ON SCROLL
  const [color, setColor] = useState(false); //default value
  const colorChanger = () => {
    if (window.scrollY >= 100) {
      //if the vertical window scroll's pixels is greater or equal to 100px
      setColor(true);
    } else {
      setColor(false);
    }
  };

  //create event listener on the window
  window.addEventListener("scroll", colorChanger);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/">
        <h1>Taek Trainer</h1>
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/pricing">Pricing</Link>
        </li>
        <li>
          <Link to="/training">Training</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={21} style={{ color: "#fff" }} />
        ) : (
          <FaBars size={21} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
