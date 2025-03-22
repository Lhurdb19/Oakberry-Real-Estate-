import React from "react";
import "./Servicestyles.css";


const BuildingConstruction = () => {
  return (
    <>
    <div className="creativity-header">
      <h2>Building Construction</h2>
    </div>
    <div className="service-container">
      <div className="service-section">
        <img src="https://res.cloudinary.com/damamkuye/image/upload/v1742572017/Building-construction_vkwhey.jpg" alt="Building Construction"  />
        <p className="service-description" style={{paddingLeft: '20px'}}>
          <strong>CREATIVITY ESTATE MANAGEMENT</strong> <br />
        From residential to commercial projects, we build durable and modern structures 
          with precision and expertise.
        </p>
      </div>

      <div className="service-section">
        <p className="service-description">
          <strong>Achieving Great Design and Customer Satisfaction</strong>  
          <br />
          Our focus on sustainable materials, innovation, and quality craftsmanship 
          ensures that every project meets excellence.
          <br />
          Regularly communicate progress, providing opportunities for client input. Strive for excellence in craftsmanship and attention to detail. Post-completion, solicit feedback and address any concerns promptly. Continuous improvement, client engagement, and a commitment to exceeding expectations are key elements in achieving design excellence and customer satisfaction.
        </p>
        <img src="https://res.cloudinary.com/damamkuye/image/upload/v1742520536/house2_cot55t.jpg" alt="Construction Work" />
      </div>
    </div>
    </>
  );
};

export default BuildingConstruction;
