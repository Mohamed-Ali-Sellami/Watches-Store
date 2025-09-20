import React from "react";
import './Styles/Navbar.css'
import imgbanniere from "./images/nav1.png"

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="logo">CHRONOVIA</div>

        <ul className="nav-links">
          <li>
            <a href="#">Watches</a>
          </li>
          <li>
            <a href="#">Warranty Services</a>
          </li>
          <li>
            <a href="#">Stores</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul>

        <button className="contact-btn">Contact us →</button>
      </nav>

      {/* Hero Section */}
      <div className="hero">
        <div className="hero-text">
          <h1 className="hero-title">
            Timeless <br />
            Elegance, <br />
            Unmatched <br />
            Precision
          </h1>

          <p className="hero-description">
            Handcrafted luxury watches designed for those who value time
          </p>

          <div className="hero-buttons">
            <button className="btn-primary">Explore Collection →</button>
            <button className="btn-secondary">Explore Collection</button>
          </div>
        </div>

        <div className="watch-container">
          <div className="watch-circle">
            <div className="watch-face">
              <div className="imageban">
                <img src={imgbanniere} alt="Logo" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <footer className="social-links">
        <a href="#"><i class="fa-brands fa-facebook"></i></a>
        <a href="#"><i class="fa-brands fa-instagram"></i></a>
        <a href="#"><i class="fa-brands fa-x-twitter"></i></a>
        <a href="#"><i class="fa-brands fa-youtube"></i></a>
      </footer>
    </div>
  );
};

export default Navbar;
