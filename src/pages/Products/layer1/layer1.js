import React from "react";
import "./layer1.css"; // Importing CSS for styling
import img1 from "../../../components/Images/Background/lab-technician.webp";

const Tech1 = () => {
  return (
    <section
      className="layer_1"
      style={{ backgroundImage: `url(${img1})` }}
    >
      <div className="layer_1-overlay"></div>
      <div className="layer_1-content">
        <h1>Advanced Therapeutics, Uncompromising Quality: Discover Our Pharmaceutical Innovations</h1>
      </div>
    </section>
  );
};

export default Tech1;