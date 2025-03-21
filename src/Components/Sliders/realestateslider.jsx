import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Realestateslider.css";

const realEstateData = [
  {
    title: "Luxury Villa in Beverly Hills",
    description: "An exquisite five-bedroom villa nestled in the heart of Beverly Hills, offering unparalleled luxury with a private pool, panoramic views, and state-of-the-art interiors that redefine elegance and comfort for modern living.",
    price: "$2,500,000",
    image: "https://res.cloudinary.com/damamkuye/image/upload/v1742212847/home-model-2_f62whp.png",
  },
  {
    title: "Modern Apartment in New York",
    description: "A sophisticated and contemporary high-rise apartment located in the heart of New York City. This stylish residence offers breathtaking skyline views, premium amenities, and an open-concept design perfect for urban dwellers seeking convenience and luxury.",
    price: "$850,000",
    image: "https://res.cloudinary.com/damamkuye/image/upload/v1742520536/house2_cot55t.jpg",
  },
  {
    title: "Beachfront House in Miami",
    description: "A stunning four-bedroom beachfront house with direct access to pristine sandy shores, breathtaking ocean views, and a modern architectural design that seamlessly blends indoor and outdoor living spaces for the ultimate coastal lifestyle.",
    price: "$1,750,000",
    image: "https://res.cloudinary.com/damamkuye/image/upload/v1742520532/house4_ni8pwn.jpg",
  },
  {
    title: "Luxury in Hills",
    description: "An exquisite five-bedroom villa nestled in the heart of Beverly Hills, offering unparalleled luxury with a private pool, panoramic views, and state-of-the-art interiors that redefine elegance and comfort for modern living.",
    price: "$1,700,000",
    image: "https://res.cloudinary.com/damamkuye/image/upload/v1742520557/3-bed-terrace_yvem3b.jpg",
  },
  {
    title: "Modern Apartment in Florida",
    description: "A sophisticated and contemporary high-rise apartment located in the heart of New York City. This stylish residence offers breathtaking skyline views, premium amenities, and an open-concept design perfect for urban dwellers seeking convenience and luxury.",
    price: "$1,050,000",
    image: "https://res.cloudinary.com/damamkuye/image/upload/v1742212464/3D-real-estate-projects1_ifmnvp.jpg",
  },
  {
    title: "Beachfront House in LA",
    description: "A stunning four-bedroom beachfront house with direct access to pristine sandy shores, breathtaking ocean views, and a modern architectural design that seamlessly blends indoor and outdoor living spaces for the ultimate coastal lifestyle.",
    price: "$1,950,000",
    image: "https://res.cloudinary.com/damamkuye/image/upload/v1742212847/home-model-2_f62whp.png",
  },
];

const RealEstateSlider = () => {
  const textSliderRef = useRef(null);
  const imageSliderRef = useRef(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isAutoScrolling) {
        textSliderRef.current?.slickNext();
        imageSliderRef.current?.slickNext();
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [isAutoScrolling]);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <>
    <div className="legacy">
        <h2>Building a legacy, one project at a time</h2>
        <p>Whether you're a Real Estate Company, Designer or simply someone with an interest in the built environment, our latest projects are sure to inspire and challenge you.</p>
    </div>
    <div className="realestate-container">
      {/* Text Slider */}
      <div className="text-slider">
        <Slider ref={textSliderRef} {...settings}>
          {realEstateData.map((item, index) => (
            <motion.div
              key={index}
              className="realestate-text"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <p className="price">{item.price}</p>
            </motion.div>
          ))}
        </Slider>
      </div>

      {/* Manual Scroll Buttons */}
      <div className="nav-buttons">
        <button
          className="scroll-btn left-btn"
          onClick={() => {
            setIsAutoScrolling(false);
            textSliderRef.current.slickPrev();
            imageSliderRef.current.slickPrev();
          }}
        >
          ◀ Prev
        </button>
        <button
          className="scroll-btn right-btn"
          onClick={() => {
            setIsAutoScrolling(false);
            textSliderRef.current.slickNext();
            imageSliderRef.current.slickNext();
          }}
        >
          Next ▶
        </button>
      </div>

      {/* Image Slider */}
      <div className="image-slider">
        <Slider ref={imageSliderRef} {...settings}>
          {realEstateData.map((item, index) => (
            <motion.div
              key={index}
              className="realestate-image"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <img src={item.image} alt={item.title} />
            </motion.div>
          ))}
        </Slider>
      </div>
    </div>
    </>
  );
};

export default RealEstateSlider;
