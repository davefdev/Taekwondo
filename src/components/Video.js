import React from "react";
import { Link } from "react-router-dom";
import "./VideoStyles.css";
import taekVideo from "../assets/taek.mp4";

const Video = () => {
  return (
    <div className="main">
      <video autoPlay loop muted id="video">
        <source src={taekVideo} type="video/mp4" />
      </video>
      <div className="content">
        <h1>TAEKWONDO TRAINING</h1>
        <p>Learn self defence with the best</p>

        <div>
          <Link to="/training" className="btn">
            Training
          </Link>
          <Link to="/contact" className="btn btn-light">
            Launch
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Video;
