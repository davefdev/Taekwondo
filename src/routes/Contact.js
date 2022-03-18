import React from "react";
import Navbar from "../components/Navbar";
import BannerImage from "../components/BannerImage";
import Form from "../components/Form";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <BannerImage
        heading="CONTACT US"
        text="Contact Taek Trainer Manchester"
      />
      <Form />
      <Footer />
    </div>
  );
};

export default Contact;
