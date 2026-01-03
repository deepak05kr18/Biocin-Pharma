import React from "react";
import "./irisSection.css";

const IrisSection = () => {
    const content = `
     At Biocin Pharma Pvt Ltd, we are committed to redefining everyday healthcare through quality medicines and trustworthy service. We focus on delivering essential medical and wellness products with a modern, customer-centric approach that emphasizes transparency and reliability. Even as a newly established company, we set ourselves apart with an innovative mindset and a dedication to building lasting trust with our customers. Distinct from other similarly named entities, we carry a unique identity and vision—driven by integrity, progress, and a strong commitment to becoming a dependable partner in the healthcare ecosystem.
    `;

    return (
        <section className="dd-section-rr">
            <div className="dd-background-pattern"></div>
            <div className="dd-content-wrapper">
                <h2 className="dd-heading-rr">
                    <span className="dd-heading-highlight">Biocin Pharma Private Limited</span>
                </h2>
                <div className="dd-container-rr">
                    <div className="dd-text-rr">
                        <p className="dd-paragraph-rr">{content}</p>
                    </div>
                </div>
            </div>
            <div className="dd-tech-dots"></div>
        </section>
    );
};

export default IrisSection;
