import React from 'react';
import './Styles/Footer.css';

const Footer = () => {
  return (
    <>
      {/* Font Awesome CDN */}
      <link 
        rel="stylesheet" 
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" 
      />
      
      <footer className="footer">
      <div className="footer-container">
        {/* Brand Section */}
        <div className="brand-section">
          <h2 className="brand-name">CHRONOVIA</h2>
          <p className="brand-description">
            Clarity vous offre l’élégance et la précision dont vous avez besoin pour sublimer votre style.
          </p>
          <div className="payment-methods">
            <div className="payment-icon">●●●●</div>
            <div className="payment-icon">Visa</div>
            <div className="payment-icon">PayPal</div>
            <div className="payment-icon">Mastercard</div>
          </div>
        </div>

        {/* Company Section */}
        <div className="footer-section">
          <h3 className="section-title">COMPANY</h3>
          <ul className="footer-links">
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#warranty">Warranty</a></li>
            <li><a href="#returns">Returns</a></li>
          </ul>
        </div>

        {/* Help Section */}
        <div className="footer-section">
          <h3 className="section-title">HELP</h3>
          <ul className="footer-links">
            <li><a href="#support">Customer Support</a></li>
            <li><a href="#delivery">Delivery Details</a></li>
            <li><a href="#terms">Terms & Conditions</a></li>
            <li><a href="#privacy">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Social Icons */}
        <div className="social-section">
          <div className="social-icons">
            <a href="#" className="social-icon">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="social-icon">
             <i class="fa-brands fa-x-twitter"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="copyright">
        <p>© Copyright 2025. All Rights Reserved by Sellami Med Ali</p>
      </div>
    </footer>
    </>
  );
};

export default Footer;