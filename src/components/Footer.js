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
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#ffffff", marginRight: "2.25rem" }}
              />
              07444059685
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#ffffff", marginRight: "2.25rem" }}
              />
              taektrainer@pretend.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>About</h4>
          <p>
            Taek Trainer MAnchester is your preeminent taekwondo trainer in the
            North West. Boasting over 100 years of combined experience,
          </p>
          <div className="social">
            <FaFacebook
              size={32}
              style={{ color: "#ffffff", marginRight: "1.25rem" }}
            />
            <FaTwitter
              size={32}
              style={{ color: "#ffffff", marginRight: "1.25rem" }}
            />
            <FaLinkedin
              size={32}
              style={{ color: "#ffffff", marginRight: "1.25rem" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
