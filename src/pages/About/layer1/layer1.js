import React from "react";
import "./layer11.css"; // Updated CSS file name
import img1 from "../../../components/Images/Background/pharma.webp";

const AboutLayer1 = () => {
  return (
    <section
      className="about-hero"
      style={{ backgroundImage: `url(${img1})` }}
    >
      <div className="about-hero-overlay"></div>
      <div className="about-hero-content">
        <h1>Together Towards Tomorrow</h1>
      </div>
    </section>
  );
};

export default AboutLayer1;