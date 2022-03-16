import React from "react";
import "./TrainingTaekStyles.css";
import { Link } from "react-router-dom";
import Punch from "../assets/punch.jpg";
import Kick from "../assets/kick.jpg";

const TrainingTaek = () => {
  return (
    <div className="training">
      <div className="left">
        <h1>Taek Training</h1>
        <p>You will hone your Taekwondo skills through intense training, learning all aspects of </p>
        <Link to="/contact">
          <button className="btn"> Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="image-container">
          <div className="image-layers top">
            <img src={Kick} className="image" alt="taekwondo kick" />
          </div>
          <div className="image-layers bottom">
            <img src={Punch} className="image" alt="taekwondo punch" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingTaek;
