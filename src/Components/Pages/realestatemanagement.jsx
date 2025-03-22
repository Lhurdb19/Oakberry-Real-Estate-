import React from "react";
import "./Servicestyles.css";

const RealEstateManagement = () => {
  return (
    <>
    <div className="creativity-header">
      <h2>Real Estate Management</h2>
    </div>
    <div className="service-container">
      {/* First Section */}
      <div className="service-section">
        <img src="https://res.cloudinary.com/damamkuye/image/upload/v1742571032/real-estate-management-software-500x500_dj9ite.webp" alt="Real Estate Management" />
        <p className="service-description" style={{paddingLeft: '20px'}}>
          <strong>CREATIVITY ESTATE MANAGEMENT</strong> <br />
          
        Our Real Estate Management services offer comprehensive solutions, 
          including property valuation, leasing, and tenant management. 
          We ensure maximum property value through expert maintenance, 
          market analysis, and legal compliance. With years of experience, 
          we help investors and homeowners optimize their real estate assets efficiently.
        </p>
      </div>

      {/* Second Section */}
      <div className="service-section">
        <p className="service-description">
          <strong>Achieving Great Design and Customer Satisfaction</strong>  
          <br />
          To achieve great design and customer satisfaction, we employ a 
          customer-centric approach which begins with thorough client consultations 
          to understand their needs and preferences. Incorporate feedback throughout 
          the design process, ensuring collaboration and transparency. Prioritize 
          functionality, aesthetics, and sustainability.
          <br />
          <br />
          Regularly communicate progress, providing opportunities for client input. 
          Strive for excellence in craftsmanship and attention to detail. 
          Post-completion, solicit feedback and address any concerns promptly. 
          Continuous improvement, client engagement, and a commitment to exceeding 
          expectations are key elements in achieving design excellence and 
          customer satisfaction.
        </p>
        <img src="https://res.cloudinary.com/damamkuye/image/upload/v1742212464/3D-real-estate-projects1_ifmnvp.jpg" alt="Real Estate Management Process" />
      </div>
    </div>
    </>
  );
};

export default RealEstateManagement;
