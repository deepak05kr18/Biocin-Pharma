import React from "react";
import "./main.css";
import mainImage from "../../../components/Images/Background/home_main.jpg";

const HeroSection = () => {
  return (
    <div className="hero-container">

      {/* Left Image */}
      <div className="hero-image">
        <img src={mainImage} alt="Survey Drone" />
      </div>

      {/* Right Text Content */}
      <div className="hero-text">
        <h1>Innovating Everyday Healthcare</h1>
        <p>
          Biocin Pharma Pvt Ltd delivers quality medicines with a modern, customer-centric approach, emphasizing transparency, innovation, and trust while building a unique identity as a reliable partner in everyday healthcare.
        </p>
      </div>

    </div>
  );
};

export default HeroSection;
