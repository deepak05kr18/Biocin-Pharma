// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/HomePage';
import AboutUs from './pages/About/AboutUsPage';
import ContactUs from './pages/Contact_us/ContactUsPage';
import Products from './pages/Products/products';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './ScrollToTop'; 

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Ensure this is inside Router */}
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
