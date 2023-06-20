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
        <p>
          You will hone your Taekwondo skills through intense training, learning
          all aspects of{" "}
        </p>
        <Link to="/contact">
          <button disabled className="btn"> Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-layers top">
            <img src={Kick} className="img" alt="taekwondo kick" />
          </div>
          <div className="img-layers bottom">
            <img src={Punch} className="img" alt="taekwondo punch" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingTaek;
