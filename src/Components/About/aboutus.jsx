import React from 'react';
import CountUp from 'react-countup'; // ✅ Import CountUp component
import './About.css';

const CountUp1 = () => <CountUp end={50} duration={3} />;
const CountUp2 = () => <CountUp end={210} duration={3} />;
const CountUp3 = () => <CountUp end={450} duration={3} />;
const CountUp4 = () => <CountUp end={100} duration={3} />;


function AboutUs() {
    return (
      <>
        <div className="aboutus-image">
            <h1>ABOUT OAKBERRY REAL ESTATE</h1>
            <a href="/">LEARN MORE</a>
        </div>
        <div className='about-container'>
          <div className="about-oakberry">
            <img src="https://res.cloudinary.com/damamkuye/image/upload/v1742256654/inside_3d_pqoil3.webp" alt="" />
            <div className="about-oak-text">
              <h5>ABOUT US</h5>
              <h2>Oakberry A Real Estate Company</h2>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
              <div className="countup-con">
                
                <div className="counter-box">
                  <h2><CountUp1 /></h2>
                  <p>Years of Experienced</p>
                </div>
  
                <div className="counter-box">
                  <h2><CountUp2 />k+</h2>
                  <p>Total Properties</p>
                </div>
  
                <div className="counter-box">
                  <h2><CountUp3 /></h2>
                  <p>Qualified Realtors</p>
                </div>
  
                <div className="counter-box">
                  <h2><CountUp4 /></h2>
                  <p>Total Branches</p>
                </div>
              </div>
              <img src="https://res.cloudinary.com/damamkuye/image/upload/v1742259809/3d_image_jukddi.webp" alt="" />
            </div>
          </div>
          <div className="best-container">
            <div className="find-con">
                <h2>Find Best Place For Living</h2>
                <p>Find Best Place For Living</p>
            </div>
            <a href="/">GET IN TOUCH</a>
          </div>
        </div>
      </>
    );
  }
  
  export default AboutUs;
  