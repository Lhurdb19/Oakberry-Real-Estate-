import React from "react";
import "./Servicestyles.css";

const Generalbuildingsuppliers = () => {
  return (
    <>
    <div className="creativity-header">
      <h2>General Building Suppliers</h2>
    </div>
    <div className="service-container">
      <div className="service-section">
        <img src="https://res.cloudinary.com/damamkuye/image/upload/v1742572014/supplies_tcvz1d.jpg" alt="Estate Management" />
        <p className="service-description" style={{paddingLeft: '20px'}}>
          <strong>CREATIVITY ESTATE MANAGEMENT</strong> <br />
          
        Our estate management services ensure seamless property administration, 
          legal compliance, and optimized asset performance.
        </p>
      </div>

      <div className="service-section">
        <p className="service-description">
          <strong>Achieving Great Design and Customer Satisfaction</strong>  
          <br />
          We work closely with property owners to maintain value, streamline operations, 
          and enhance the living experience.
          <br />
          <br />
          Regularly communicate progress, providing opportunities for client input. 
          Strive for excellence in craftsmanship and attention to detail. 
          Post-completion, solicit feedback and address any concerns promptly. 
          Continuous improvement, client engagement, and a commitment to exceeding 
          expectations are key elements in achieving design excellence and 
          customer satisfaction.
        </p>
        <img src="https://res.cloudinary.com/damamkuye/image/upload/v1742641033/suppliers_2_mdboat.png" alt="Estate Management Solutions" />
      </div>
    </div>
    </>
  );
};

export default Generalbuildingsuppliers;
