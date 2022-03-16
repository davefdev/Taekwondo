import React from "react";
import Navbar from "../components/Navbar";
import BannerImage from "../components/BannerImage";
import Footer from "../components/Footer";
import TrainingTaek from "../components/TrainingTaek";

const Training = () => {
  return (
    <div>
      <Navbar />
      <BannerImage heading="LEARN WITH THE BEST" text="Intense Taekwondo Training" />
      <TrainingTaek />
      <Footer />
    </div>
  );
};

export default Training;
