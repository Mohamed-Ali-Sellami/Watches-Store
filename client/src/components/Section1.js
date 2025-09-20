import React from 'react';
import "./Styles/Section1.css";
import img1s1 from "./images/watch1s1.png";
import img2s1 from "./images/watch2s1.png";
import img3s1 from "./images/watch3s1.png";

const Section1 = () => {
  return (
    <div className='bodys1'>
      <div className="containers1">
        <div className="headers1">
          <h1>A Timepiece for Every Occasion</h1>
          <p>Featured Collections</p>
        </div>

        <div className="collectionss1">

          {/* Classic Collection */}
          <div className="collection-cards1">
            <div className="watch-images1">
              <img src={img1s1} alt="Classic Watch" className="watch-img" />
            </div>
            <h3 className="collection-titles1">Classic Collection</h3>
            <p className="collection-subtitles1">Timeless designs for formal wear</p>
            <a href="#" className="explore1-btn1">Explore Collection</a>
          </div>

          {/* Hybrid Collection */}
          <div className="collection-cards1">
            <div className="watch-images1">
              <img src={img2s1} alt="Hybrid Watch" className="watch-img" />
            </div>
            <h3 className="collection-titles1">Hybrid Collection</h3>
            <p className="collection-subtitles1">Modern technology with classic touch</p>
            <a href="#" className="explore1-btn1">Explore Collection</a>
          </div>

          {/* Limited Editions */}
          <div className="collection-cards1">
            <div className="watch-images1">
              <img src={img3s1} alt="Limited Watch" className="watch-img" />
            </div>
            <h3 className="collection-titles1">Limited Editions</h3>
            <p className="collection-subtitles1">Exclusive, numbered luxury watches</p>
            <a href="#" className="explore1-btn1">Explore Collection</a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Section1;
