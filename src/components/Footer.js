import React from "react";
import "./FooterStyles.css";
import {
  FaFacebook,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaSearchLocation,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaSearchLocation
              size={20}
              style={{ color: "#ffffff", marginRight: "2.25rem" }}
            />
            <div>
              <p>86 Turner Street, Salford,</p>
              <h4>Greater Manchester</h4>
            </div>
          </div>
          <div className="phone">
            <h4><FaPhone size={20}
              style={{ color: "#ffffff", marginRight: "2.25rem" }}/>07444059685</h4>
          </div>
          <div className="email">
            <h4><FaMailBulk size={20}
              style={{ color: "#ffffff", marginRight: "2.25rem" }}/>taektrainer@pretend.com</h4>
          </div>
        </div>
        <divclassName
      </div>
    </div>
  );
};

export default Footer;
