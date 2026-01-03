import React, { useState, useCallback } from "react";
import "./hero.css";
import img1 from "../../../components/Images/Background/output_1.webp";
import img2 from "../../../components/Images/Background/output_0.webp";
import img3 from "../../../components/Images/Background/lab_image.webp";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const HeroBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: img2,
      title: "Advancing Healthcare with Precision",
      description:
        "Our mission is to deliver high-quality pharmaceutical formulations through innovation, stringent quality standards, and ethical practices.",
    },
    {
      image: img1,
      title: "Committed to Quality. Driven by Science",
      description: "We strive to improve healthcare outcomes by developing reliable, safe, and effective pharmaceutical solutions.",
    },
    {
      image: img3,
      title: "Shaping Health Through Trusted Formulations",
      description: "Our focus is on providing consistent, compliant, and patient-centric medicines backed by modern manufacturing and quality assurance.",
    },
  ];

  const goToNextSlide = useCallback(() => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  }, [slides.length]);

  const goToPreviousSlide = useCallback(() => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="hero">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`hero-slide ${index === currentSlide ? "active" : ""}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="hero-content">
            <h1>{slide.title}</h1>
            <p>{slide.description}</p>
          </div>
        </div>
      ))}

      <button className="nav-arrow right" onClick={goToNextSlide}>
        <FaChevronRight className="arrow-icon" />
      </button>
      <button className="nav-arrow left" onClick={goToPreviousSlide}>
        <FaChevronLeft className="arrow-icon" />
      </button>

      <div className="slide-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentSlide ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroBanner;
