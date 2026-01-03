import React from "react";
import "./why.css";

// Importing images directly
import accuracyIcon from "../../../components/Images/Badges/Safety.png";
import speedIcon from "../../../components/Images/Badges/Quality.png";
import efficiencyIcon from "../../../components/Images/Badges/Reliability.png";
import costIcon from "../../../components/Images/Badges/profit.png";
import sustainableIcon from "../../../components/Images/Badges/Support.png";
import aiIcon from "../../../components/Images/Badges/artificial-intelligence.png";

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us">
      <h2 className="section-heading">Why Enterprises Trust Us</h2>
      <div className="reasons-container">
        <div className="reason-item">
          <img src={accuracyIcon} alt="Precision Icon" className="reason-icon" />
          <p>
            <strong>Safety First, Always</strong><br/> Our manufacturing processes follow validated protocols and rigorous safety controls, ensuring products that are pure, safe, and reliable for patients and healthcare providers.
          </p>
        </div>
        <div className="reason-item">
          <img src={speedIcon} alt="Speed Icon" className="reason-icon" />
          <p>
            <strong>Uncompromised Quality & Compliance:</strong><br/> We adhere to stringent pharmaceutical standards, ensuring every product meets global regulatory requirements such as WHO-GMP, ISO, and FDA guidelines. Quality is built into every step—from raw materials to the final formulation.
          </p>
        </div>
        <div className="reason-item">
          <img src={efficiencyIcon} alt="Efficiency Icon" className="reason-icon" />
          <p>
            <strong>Consistent Supply & Reliability:</strong><br/> With robust production capacity, optimized logistics, and strong supply-chain capabilities, we guarantee on-time delivery and consistent availability—no matter the scale of your operations.
          </p>
        </div>
        <div className="reason-item">
          <img src={costIcon} alt="Cost Icon" className="reason-icon" />
          <p>
            <strong>Cost-Effective Solutions:</strong> <br/>We offer high-quality formulations at competitive prices, delivering exceptional value without compromising purity, stability, or therapeutic efficacy.
          </p>
        </div>
        <div className="reason-item">
          <img src={sustainableIcon} alt="Sustainability Icon" className="reason-icon" />
          <p>
            <strong>Dedicated Technical & Regulatory Support:</strong><br/> Our expert teams assist with documentation, regulatory approvals, formulation guidance, and customized product solutions, ensuring a frictionless experience for our partners.
            results.
          </p>
        </div>
        <div className="reason-item">
          <img src={aiIcon} alt="AI Icon" className="reason-icon" />
          <p>
            <strong>Innovation That Drives Better Outcomes:</strong> <br/>We continuously invest in advanced R&D, modern formulations, and cutting-edge technologies to create medicines that improve treatment effectiveness and patient experience.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
