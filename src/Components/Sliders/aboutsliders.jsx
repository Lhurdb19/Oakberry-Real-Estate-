import React from "react";
import Slider from "react-slick";
import { FaQuoteLeft } from "react-icons/fa";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="about-slider-container">
      <Slider {...settings} className="slider-container">
        <div className="slider-wrapper">
          <div className="quote-icon"><FaQuoteLeft /></div>
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
          <div className="clients-image-text">
            <img src="" alt="" />
            <div className="clients-text">
                <h4>Roger Scott</h4>
                <h5>MARKETING MANAGER</h5>
            </div>
          </div>
        </div>
        
      </Slider>
    </div>
  );
}
