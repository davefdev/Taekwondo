import React from "react";
import Navbar from "../components/Navbar";
import BannerImage from "../components/BannerImage";
import Footer from "../components/Footer";
import Form from "../components/Form";
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
