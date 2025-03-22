import React from "react";
import "./Servicestyles.css";

const Landsurveying = () => {
  return (
    <>
    <div className="creativity-header">
      <h2>Land Surveying</h2>
    </div>
    <div className="service-container">
      <div className="service-section">
        <img src="https://res.cloudinary.com/damamkuye/image/upload/v1742572009/land_surveying_htu7iu.webp" alt="Interior Design" />
        <p className="service-description" style={{paddingLeft: '20px'}}>
          <strong>CREATIVITY ESTATE MANAGEMENT</strong> <br />
          
        We create aesthetic and functional interiors that reflect your personal style. 
          From space planning to material selection, our designs enhance comfort and luxury.
        </p>
      </div>

      <div className="service-section">
        <p className="service-description">
          <strong>Achieving Great Design and Customer Satisfaction</strong>  
          <br />
          We focus on aesthetics, sustainability, and client preferences to craft stunning interiors. 
          Our process includes collaboration, transparency, and attention to detail to exceed expectations.
          <br />
          <br />
          Regularly communicate progress, providing opportunities for client input. 
          Strive for excellence in craftsmanship and attention to detail. 
          Post-completion, solicit feedback and address any concerns promptly. 
          Continuous improvement, client engagement, and a commitment to exceeding 
          expectations are key elements in achieving design excellence and 
          customer satisfaction.
        </p>
        <img src="https://res.cloudinary.com/damamkuye/image/upload/v1742641558/land_survey-2_b8zhux.png" alt="Interior Design Concept" />
      </div>
    </div>
    </>
  );
};

export default Landsurveying;
