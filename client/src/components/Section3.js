import React from 'react';
import './Styles/Section3.css';
import s3img1 from './images/section3-1.jpg'
import s3img2 from './images/section3-2.jpg'
import s3img3 from './images/section3-3.jpg'

const Section3 = () => {
  return (
    <div className='bodyheritage'>
      <div className="containerheritage">
        <div className="headerheritage">
          <h1>Where Tradition Meets Innovation</h1>
          <p>Our Heritage</p>
        </div>

        <div className="heritage-content">
          
          {/* First row - How it started and Handmade Excellence */}
          <div className="heritage-row">
            <div className="heritage-card">
              <div className="heritage-image-container">
                <img src={s3img1} alt="Watchmaking workshop" className="heritage-img workshop-img" />
              </div>
              <div className="heritage-text">
                <h3 className="heritage-title">How it started</h3>
                <p className="heritage-description">
                  Born from a passion for precision, our journey began decades ago with a vision—
                  to create timepieces that fuse heritage craftsmanship with modern innovation. 
                  Each watch is a tribute to master artistry, engineered with the finest materials and 
                  perfected through endless attention. From the very first conceptual prototype to becoming a 
                  global symbol of elegance, we continue to push the boundaries of horological 
                  engineering that every watch we craft is a piece of perfection.
                </p>
              </div>
            </div>

            <div className="heritage-card">
              <div className="heritage-image-container">
                <img src={s3img2} alt="Craftsman at work" className="heritage-img craftsman-img" />
              </div>
              <div className="heritage-text">
                <h3 className="heritage-title">Handmade Excellence</h3>
                <p className="heritage-description">
                  Every timepiece we create is a masterpiece 
                  of precision and passion. From the finest 
                  dial, stainless steel case to the hand-selected 
                  leather strap, every component is 
                  carefully selected for luxury, durability, and 
                  comfort. Our expert artisans hand-assemble 
                  each watch, ensuring unmatched attention 
                  to detail. The intricate polishing, engraving, 
                  and finishing techniques result in a watch 
                  that is not just worn - it is experienced. With 
                  tradition and innovation guiding us, we blend tradition with 
                  innovation to create timepieces that stand 
                  the test of time.
                </p>
              </div>
            </div>
          </div>

          {/* Second row - Japanese Precision */}
          <div className="heritage-section full-width">
            <div className="heritage-image-container">
              <img src={s3img3} alt="Watch mechanism" className="heritage-img mechanism-img" />
            </div>
            <div className="heritage-text">
              <h3 className="heritage-title">Japanese Precision</h3>
              <p className="heritage-description">
                At the heart of every watch lies the soul of precision—a movement 
                engineered for flawless performance. We partner with the world's 
                finest movement makers, from the legendary Swiss ETA & Sellita to the 
                renowned Japanese Miyota. Each movement undergoes rigorous testing to ensure 
                seamless sweep of an automatic movement or the pinpoint accuracy 
                of quartz technology, our watches are built for reliability, longevity, 
                and unmatched accuracy. Every second counts, and we ensure each 
                one is measured with perfection.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Section3;