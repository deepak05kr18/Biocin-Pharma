import React, { useState } from 'react';
import './contact.css';

const Contact = () => {
  // TODO: Add your Google Sheets script URL here after hosting
  // Example format: 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec'
  const scriptURL = null; // Set to null for now, will add after hosting

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!scriptURL) {
      alert('Form submission is currently disabled. Please contact us directly via email or phone.');
      console.log('Form data would be submitted:', formData);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      return;
    }

    setIsSubmitting(true);
    const form = e.target;

    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      .then(() => {
        alert('Thank you! Your form has been submitted successfully.');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      })
      .catch((error) => {
        console.error('Error!', error.message);
        alert('There was an error submitting the form. Please try again.');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section className="contact-page-sec">
      <div className="container">
        <div className="contact-info-row">
          {/* Address Section */}
          <div className="contact-info-col">
            <div className="contact-info">
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <i className="fas fa-map-marked"></i>
                </div>
                <div className="contact-info-text">
                  <h2>Address</h2>
                  <span>225, Globe Business Park, Plot No 30, Kalyan Badlapur Road, Ambernath West, Thane, Maharashtra 421521
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Email Section */}
          <div className="contact-info-col">
            <div className="contact-info">
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="contact-info-text">
                  <h2>E-mail</h2>
                  <span>surya@biocinpharma.com</span>
                </div>
              </div>
            </div>
          </div>

          {/* Office Hours Section */}
          <div className="contact-info-col">
            <div className="contact-info">
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <i className="fas fa-clock"></i>
                </div>
                <div className="contact-info-text">
                  <h2>Contact Number</h2>
                  <span>+91 9987190619</span>
                  </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form and Map Section */}
        <div className="contact-content-row">
          {/* Contact Form Section */}
          <div className="contact-form-col">
            <div className="contact-page-form">
              <h2>Get in Touch</h2>
              <form name="contact-form" onSubmit={handleSubmit}>
                <div className="form-grid">
                  {/* First Row: Name & Email */}
                  <div className="input-group">
                    <input
                      type="text"
                      placeholder="Your Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                    <input
                      type="email"
                      placeholder="E-mail"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Second Row: Phone & Subject */}
                  <div className="input-group">
                    <input
                      type="text"
                      placeholder="Phone Number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                    <input
                      type="text"
                      placeholder="Subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Message Field */}
                  <div className="single-input-field">
                    <textarea
                      placeholder="Write Your Message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className="single-input-fieldsbtn">
                    <button type="submit" disabled={isSubmitting}>
                      {isSubmitting ? 'Sending...' : 'Send Now'}
                    </button>
                  </div>
                  
                  {/* Note about form submission */}
                  {!scriptURL && (
                    <div className="form-note">
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>

          {/* Map Section */}
          <div className="contact-map-col">
            <div className="contact-page-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7716178.568829285!2d73.1935627!3d19.209815!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7933e323d0459%3A0xa0ce08f3be0bb515!2sBIOCIN%20PHARMA%20PVT%20LTD!5e0!3m2!1sen!2sin!4v1767470840269!5m2!1sen!2sin" 
                width="100%"
                height="550"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Google Map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;