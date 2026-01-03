import React from "react";
import { Link } from "react-router-dom";
import { FaYoutube, FaLinkedin, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt, FaCode } from "react-icons/fa";
import "../styles/Footer.css"; 
import img1 from '../components/Images/Logo/Biocin_logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* First Row */}
        <div className="footer-row">
          <div className="footer-column company">
            <div className="logo-container">
              <img src={img1} alt="Biocin Pharma Logo"/>
            </div>
          </div>

          <div className="footer-column">
            <h2>Quick Links</h2>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about-us">About Us</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/contact-us">Contact Us</Link></li>
            </ul>
          </div>


          <div className="footer-column">
            <h2>Healthcare Segments</h2>
            <ul>
              <li><Link to="/products">Bone & Mineral Health</Link></li>
              <li><Link to="/products">Hematinics & Anemia</Link></li>
              <li><Link to="/products">Pain & Inflammation</Link></li>
              <li><Link to="/products">Cardiovascular</Link></li>
              <li><Link to="/products">Antibiotics</Link></li>
              <li><Link to="/products">Gastrointestinal</Link></li>
              <li><Link to="/products">Respiratory</Link></li>
              <li><Link to="/products">Anti-diabetic</Link></li>
            </ul>
          </div>
        </div>

        <br />
        <hr className="divider" />
        <br />

        <div className="footer-row">
          <div className="footer-column contact">
            <h2>Contact Us</h2>
            <div className="contact-item">
              <div className="icon1"><FaEnvelope className="icon" /></div>
              <div className="contact-text">
                surya@biocinpharma.com
              </div>
            </div>
            <div className="contact-item">
              <div className="icon1"><FaPhone className="icon" /></div>
              <div className="contact-text">
                +91 9987190619
              </div>
            </div>
          </div>

          <div className="footer-column locations">
            <h2>Locations</h2>
            <div className="contact-item">
              <FaMapMarkerAlt className="icon" />
              <div className="contact-text">
              225, Globe Business Park, Plot No 30, Kalyan Badlapur Road, Ambernath West, Thane, Maharashtra 421521
              </div>
            </div>
          </div>

          <div className="footer-column follow-us">
            <h2>Follow Us</h2>
            <div className="social-icons">
              <a href="" target="_blank" rel="noopener noreferrer" className="youtube"><FaYoutube /></a>
              <a href="" target="_blank" rel="noopener noreferrer" className="linkedin"><FaLinkedin /></a>
              <a href="" target="_blank" rel="noopener noreferrer" className="instagram"><FaInstagram /></a>
            </div>
          </div>
        </div>

        <br />
        <hr className="divider" />

        <div className="copyright-container">
          <div className="copyright-left">
            © 2025 Biocin Pharma Pvt. Ltd. All rights reserved.
          </div>
          <div className="copyright-right">
            <span>Developed and maintained by </span>
            <a 
              href="https://www.linkedin.com/in/deepak-kumar-257b83254/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="deecode"
            >
              <FaCode className="code-icon" /><strong>DeeCode</strong>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;