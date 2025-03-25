import React, { useEffect } from "react";
import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaQuoteLeft } from "react-icons/fa";
import "./Aboutslider.css";

export default function SimpleSlider() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    arrows: false,
  };

  return (
    <div className="about-slider-container">
      <Slider {...settings} className="slider-container">
        {[
          { name: "Roger Scott", role: "Marketing Manager", text: "Exceptional service and attention to detail. Working with this team has been a game-changer for our business!" },
          { name: "Jane Doe", role: "CEO", text: "Their expertise and dedication exceeded my expectations. I highly recommend their services!" },
          { name: "Michael Lee", role: "Senior Developer", text: "A seamless experience from start to finish. Professionalism at its finest!" },
          { name: "Sarah Johnson", role: "Creative Director", text: "They transformed our vision into reality with outstanding creativity and precision." },
          { name: "David Brown", role: "Product Manager", text: "Highly skilled, responsive, and innovative. I couldn't have asked for a better experience!" },
          { name: "Emily White", role: "Business Consultant", text: "Their work speaks for itself—high quality, timely delivery, and a team that truly cares!" }
        ].map((client, index) => (
          <div className="slider-wrap" key={index} data-aos="fade-up">
            <div className="quote-icon"><FaQuoteLeft /></div>
            <p>{client.text}</p>
            <div className="clients-image-text">
              <img src="https://res.cloudinary.com/damamkuye/image/upload/v1742515747/real_estates_agent_3_djrrte.jpg" alt={client.name} />
              <div className="clients-text">
                <h4>{client.name}</h4>
                <h5>{client.role}</h5>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
