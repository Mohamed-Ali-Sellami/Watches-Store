import React from 'react'
import './Styles/Section2.css'
import img1section2 from "./images/section2-img1.png" 
import img2section2 from "./images/section2-img2.png" 
import img3section2 from "./images/section2-img3.png" 
import img4section2 from "./images/section2-img4.png" 

const Section2 = () => {
  return (
    <div className='body-section2'>
      <div className="container-section2">
        <div className="header-section2">
          <h1>Trending Now - Our Most Iconic Timepieces</h1>
          <p>Bestsellers</p>
        </div>

        <div className="watches-grid">

          {/* Eterna Prime */}
          <div className="watch-card-section2">
            <div className="watch-image-section2">
              <img src={img1section2} alt="Eterna Prime" />
            </div>
            <div className="rating-section2">
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
            </div>
            <h3 className="watch-title-section2">Eterna Prime</h3>
            <p className="watch-description-section2">A masterpiece of timeless elegance, crafted for those who appreciate perfection</p>
            <div className="card-footer-section2">
              <button className="add-to-cart-btn-section2">Add to Cart →</button>
              <span className="price-section2">1199 TND</span>
            </div>
          </div>

          {/* LumeX Vision */}
          <div className="watch-card-section2">
            <div className="watch-image-section2">
              <img src={img2section2} alt="LumeX Vision" />
            </div>
            <div className="rating-section2">
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
            </div>
            <h3 className="watch-title-section2">LumeX Vision</h3>
            <p className="watch-description-section2">Bold, bright, and effortlessly stylish with luminous hands for perfect readability</p>
            <div className="card-footer-section2">
              <button className="add-to-cart-btn-section2">Add to Cart →</button>
              <span className="price-section2">949 TND</span>
            </div>
          </div>

          {/* Zenith Pulse */}
          <div className="watch-card-section2">
            <div className="watch-image-section2">
              <img src={img3section2} alt="Zenith Pulse" />
            </div>
            <div className="rating-section2">
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
            </div>
            <h3 className="watch-title-section2">Zenith Pulse</h3>
            <p className="watch-description-section2">Astronomically precise, designed to complement both formal and casual wear</p>
            <div className="card-footer-section2">
              <button className="add-to-cart-btn-section2">Add to Cart →</button>
              <span className="price-section2">749 TND</span>
            </div>
          </div>

          {/* Zenith Pulse Blue */}
          <div className="watch-card-section2">
            <div className="watch-image-section2">
              <img src={img4section2} alt="Zenith Pulse Blue" />
            </div>
            <div className="rating-section2">
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
            </div>
            <h3 className="watch-title-section2">Zenith Pulse</h3>
            <p className="watch-description-section2">Astronomically precise, designed to complement both formal and casual wear</p>
            <div className="card-footer-section2">
              <button className="add-to-cart-btn-section2">Add to Cart →</button>
              <span className="price-section2">799 TND</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Section2
