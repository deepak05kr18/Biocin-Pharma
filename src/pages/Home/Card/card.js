import React from 'react';
import { Link } from 'react-router-dom';
import './card.css';

// Importing images
import img1 from "../../../components/Images/cards/Sugar.webp";
import img2 from "../../../components/Images/cards/Body pain.webp";
import img3 from "../../../components/Images/cards/Cardiac.webp";
import img4 from "../../../components/Images/cards/Gastric (1).webp";
import img5 from "../../../components/Images/cards/Multi vitamins.webp";
import img6 from "../../../components/Images/cards/lungs_converted.webp";

// Card data with images
const cardsData = [
  {
    image: img1,
    title: 'Anti-diabetic medicines',
    description:
      'Helping maintain balanced blood sugar for healthier, confident everyday living.'
  },
  {
    image: img2,
    title: 'Pain relief ',
    description:
      'Reducing pain and inflammation effectively to restore movement and comfort.'
  },
  {
    image: img3,
    title: 'Cardiac',
    description:
      'Supporting stable blood pressure and heart health for long-term wellbeing.'
  },
  {
    image: img4,
    title: 'Gastro / Antacid',
    description:
      'Neutralizing acidity instantly for gentle stomach comfort and improved digestion.' 
 },
  {
    image: img5,
    title: 'Multivitamins',
    description:
      'Boosting daily energy, strengthening immunity, and supporting overall wellness naturally.'
  },
  {
    image: img6,
    title: 'Respiratory ',
    description:
      'Easing allergies and breathing troubles for smoother, fresher daily comfort.'
  }
];

const Cards = () => {
  return (
    <section className="cards-section">
      <div className="cards-header">
        <h1>Comprehensive Healthcare Range</h1>
        <p>
            Delivering trusted, multi-category medicines designed to support complete wellness from immunity to cardiac care.        </p>
      </div>
      <div className="cards-container">
        {cardsData.map((card, index) => (
          <div className="card" key={index}>
            <img src={card.image} alt={card.title} />
            <div className="info">
              <h1>{card.title}</h1>
              <p>{card.description}</p>
              <Link to="/products" className="btn">Read More</Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cards;
