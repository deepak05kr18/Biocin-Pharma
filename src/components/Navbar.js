import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from "./Images/Logo/Biocin_logo.png";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    const [isTop, setIsTop] = useState(true);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            
            // Check if we're at the top of the page
            setIsTop(currentScrollPos < 10);
            
            // Handle navbar visibility on scroll down/up
            setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [prevScrollPos]);

    return (
        <nav className={`navbar ${visible ? 'visible' : 'hidden'} ${isTop ? 'transparent' : 'solid'}`}>
            <div className="navbar-logo">
                <Link to="/" onClick={handleLinkClick}>
                    <img src={logo} alt="Company Logo" />
                </Link>
            </div>

            <div className="navbar-menu-icon" onClick={handleMenuToggle}>
                <div className={isMenuOpen ? "bar open" : "bar"}></div>
                <div className={isMenuOpen ? "bar open" : "bar"}></div>
                <div className={isMenuOpen ? "bar open" : "bar"}></div>
            </div>

            <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
                <li><Link to="/" onClick={handleLinkClick}>Home</Link></li>
                <li><Link to="/about-us" onClick={handleLinkClick}>About Us</Link></li>
                <li><Link to="/products" onClick={handleLinkClick}>Products</Link></li>
                <li><Link to="/contact-us" onClick={handleLinkClick}>Contact Us</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;