import React from 'react';
import './Styles/Section4.css';

const Section4 = () => {
  return (
    <div className="pricing-container">
      <div className="pricing-wrapper">
        {/* Header */}
        <div className="header">
          <h1 className="title">Exclusive Membership & VIP Pricing Plans</h1>
          <p className="subtitle">
            For watch enthusiasts and collectors who value exclusivity, craftsmanship, and early access, our 
            premium memberships offer an unparalleled experience.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="cards-container">
          {/* Member Plan */}
          <div className="pricing-card">
            <div className="card-header">
              <h2 className="card-title">Become a member</h2>
              <p className="card-description">
                Membership for early access to new collections
              </p>
              
              <div className="pricing">
                <span className="price-large">$59</span>
                <span className="price-period">/Month</span>
                <span className="price-or">or</span>
                <span className="price-medium">$499</span>
                <span className="price-period">/Year</span>
              </div>

              <button className="join-button">
                Join Prestige Membership
              </button>
            </div>

            <div className="features">
              <div className="feature">
                <div className="check-icon">✓</div>
                <div className="feature-content">
                  <p className="feature-title">Early Access to New Collections -</p>
                  <p className="feature-description">Shop before the public launch</p>
                </div>
              </div>

              <div className="feature">
                <div className="check-icon">✓</div>
                <div className="feature-content">
                  <p className="feature-title">Exclusive Pre-Order Discounts -</p>
                  <p className="feature-description">Save up to 20% on select models</p>
                </div>
              </div>

              <div className="feature">
                <div className="check-icon">✓</div>
                <div className="feature-content">
                  <p className="feature-title">Priority Customer Support -</p>
                  <p className="feature-description">VIP assistance for faster service</p>
                </div>
              </div>

              <div className="feature">
                <div className="check-icon">✓</div>
                <div className="feature-content">
                  <p className="feature-title">Limited Edition Model Previews -</p>
                  <p className="feature-description">Get sneak peeks first</p>
                </div>
              </div>

              <div className="feature">
                <div className="check-icon">✓</div>
                <div className="feature-content">
                  <p className="feature-title">Personalized Engraving on Select Watches</p>
                </div>
              </div>
            </div>
          </div>

          {/* VIP Plan */}
          <div className="pricing-card">
            <div className="card-header">
              <h2 className="card-title">Become a VIP</h2>
              <p className="card-description">
                VIP or exclusive collector's club
              </p>
              
              <div className="pricing">
                <span className="price-large">$699</span>
                <span className="price-period">/Month</span>
                <span className="price-or">or</span>
                <span className="price-medium">$999</span>
                <span className="price-period">/Year</span>
              </div>

              <button className="join-button">
                Join Prestige Membership
              </button>
            </div>

            <div className="features">
              <div className="feature">
                <div className="check-icon">✓</div>
                <div className="feature-content">
                  <p className="feature-title">Access to Members-Only Custom Models -</p>
                  <p className="feature-description">Unique, handcrafted designs</p>
                </div>
              </div>

              <div className="feature">
                <div className="check-icon">✓</div>
                <div className="feature-content">
                  <p className="feature-title">First Dibs on Limited Editions -</p>
                  <p className="feature-description">Priority purchases for exclusive releases</p>
                </div>
              </div>

              <div className="feature">
                <div className="check-icon">✓</div>
                <div className="feature-content">
                  <p className="feature-title">Personal Consultation with Watch Designers -</p>
                  <p className="feature-description">Customize your timepiece</p>
                </div>
              </div>

              <div className="feature">
                <div className="check-icon">✓</div>
                <div className="feature-content">
                  <p className="feature-title">Annual Gift Box & Luxury Collectors' Merchandise</p>
                </div>
              </div>

              <div className="feature">
                <div className="check-icon">✓</div>
                <div className="feature-content">
                  <p className="feature-title">Private Factory Tour (Japan) -</p>
                  <p className="feature-description">Experience the craftsmanship firsthand</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;