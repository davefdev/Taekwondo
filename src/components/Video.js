import React from "react";
import { Link } from "react-router-dom";
import "./VideoStyles.css";
import taekVideo from "../assets/taek.mp4";

const Video = () => {
  return ( <div className="hero">
      <video autoPlay loop muted id="video">
          <source src={taekVideo} type="video/mp4">
          </video>
    <div className="content">
    <h1>TAEKWONDO TRAINING</h1>
    <p>Unique and Learn self defence</p>
    </div>
  </div>;
  )
};

export default Video;
