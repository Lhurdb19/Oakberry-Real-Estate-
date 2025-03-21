import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosSearch } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import './Homeslider.css'

function MultipleItems() {
    const [isBuy, setIsBuy] = useState(true);
    const [isRent, setIsRent] = useState(false);
    const settings = {
        dots: true,
        autoplay:true,
        arrows: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const handleBuy = () => {
        setIsBuy(true);
        setIsRent(false)
    }
    const handleRent = () => {
        setIsBuy(false);
        setIsRent(true)
    }


  return (
    <div className="home-slider-container">
       
      <Slider {...settings} className="image-sliders">
        
        <div className="wrapper">
          <img src="https://res.cloudinary.com/damamkuye/image/upload/v1742212847/home-model-2_f62whp.png" alt="" />
          <div className="wrapper-text">
            <h2>Your Property Is Our Priority</h2>
            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
            <a href="/">LEARN MORE</a>
          </div>
        </div>

        <div className="wrapper">
          <img src="https://res.cloudinary.com/damamkuye/image/upload/v1742212358/3d-visualization_boyv4f.webp" alt="" />
          
          <div className="wrapper-text">
            <h2>Let Your Home Be Unique & Stylist</h2>
            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
            <a href="/">LEARN MORE</a>
          </div>
        </div>

        <div className="wrapper">
          <img src="https://res.cloudinary.com/damamkuye/image/upload/v1742212414/home-estate_dtpuwp.jpg" alt="" />

          <div className="wrapper-text">
            <h2>Modern House Make Better Life</h2>
            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
            <a href="/">LEARN MORE</a>
          </div>
        </div>
      </Slider>
      <div className="property-container">
      <div className="modal">
            <div className="switch">
                <button onClick={handleBuy}>Buy Property</button>
                <button onClick={handleRent}>Rent Property</button>
            </div>
        <div className="property">
            {isBuy && (
                <div className="buy-con">
                    <div className="enter-keyword">
                        <h3>ENTER KEYWORD</h3>
                        <h6><IoIosSearch  style={{color: '#807878', fontSize: '20px'}}/> Enter Keyword</h6>
                    </div>
                    <div className="pro-type">
                        <h3>PROPERY TYPE</h3>
                        <h6><FaAngleDown style={{color: '#807878', fontSize: '20px'}}/>Residential</h6>
                    </div>
                    <div className="pro-location">
                        <h3>LOCATION</h3>
                        <h6><IoLocationSharp style={{color: '#807878', fontSize: '20px'}}/>Search Location</h6>
                    </div>
                    <div className="pro-price">
                        <h3>PRICE LIMIT</h3>
                        <h6><FaAngleDown style={{color: '#807878', fontSize: '20px'}}/>$100</h6>
                    </div>
                    <button>SEARCH</button>
                </div>
            )}

            {isRent && (
                <div className="rent-con">
                    <div className="enter-keyword">
                        <h3>ENTER KEYWORD</h3>
                        <h6><IoIosSearch  style={{color: '#807878', fontSize: '20px'}}/> Enter Keyword</h6>
                    </div>
                    <div className="pro-type">
                        <h3>PROPERY TYPE</h3>
                        <h6><FaAngleDown style={{color: '#807878', fontSize: '20px'}}/>Residential</h6>
                    </div>
                    <div className="pro-location">
                        <h3>LOCATION</h3>
                        <h6><IoLocationSharp style={{color: '#807878', fontSize: '20px'}}/>Search Location</h6>
                    </div>
                    <div className="pro-price">
                        <h3>PRICE LIMIT</h3>
                        <h6><FaAngleDown style={{color: '#807878', fontSize: '20px'}}/>$100</h6>
                    </div>
                    <button>SEARCH</button>
                </div>
            )}
            </div>
        </div>
      </div>

    </div>
  );
}

export default MultipleItems;
