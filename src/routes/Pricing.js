import React from "react";
import BannerImage from "../components/BannerImage";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PricingCards from "../components/PricingCards";

const Pricing = () => {
  return (
    <div>
      <Navbar />
      <BannerImage banner="PRICING." text="Select your membership level" />
      <PricingCards />
      <Footer />
    </div>
  );
};

export default Pricing;
