import React from 'react';
import './Styles/Section5.css';
import imgs5 from './images/nav1.png'

const Section5 = () => {
  return (
    <div className="timepiece-container">
      <div className="timepiece-wrapper">
        <div className="timepiece-card">
          {/* Watch Image Section */}
          <div className="watch-section">
            <div className="watch-image">
              <img 
                src={imgs5}
                alt="Luxury Watch" 
                className="watch-img"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="content-section">
            <h1 className="main-title">Find Your Perfect Timepiece Today.</h1>
            <p className="subtitle">Our Watches which wear by celebrities</p>
            
            <div className="buttons-container">
              <button className="shop-button">
                Shop Now →
              </button>
              <button className="consultation-button">
                Book a Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section5;