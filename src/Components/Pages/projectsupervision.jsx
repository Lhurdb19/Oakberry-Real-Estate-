import React from "react";
import "./Servicestyles.css";

const ProjectSupervision = () => {
  return (
    <>
    <div className="creativity-header">
      <h2>Project Supervision</h2>
    </div>
    <div className="service-container">
      <div className="service-section">
        <img src="https://res.cloudinary.com/damamkuye/image/upload/v1742571041/supervision_ers2bf.jpg" alt="Project Supervision" />
        <p className="service-description" style={{paddingLeft: '20px'}}>
          <strong>CREATIVITY ESTATE MANAGEMENT</strong> <br />
          
         We oversee construction projects from start to finish, ensuring quality control, 
          budget management, and timely completion.
        </p>
      </div>

      <div className="service-section">
        <p className="service-description">
          <strong>Achieving Great Design and Customer Satisfaction</strong>  
          <br />
          Our supervision process emphasizes efficiency, collaboration, and precision. 
          We regularly update clients and ensure project goals are met with the highest standards.
          <br />
          <br />
          Regularly communicate progress, providing opportunities for client input. 
          Strive for excellence in craftsmanship and attention to detail. 
          Post-completion, solicit feedback and address any concerns promptly. 
          Continuous improvement, client engagement, and a commitment to exceeding 
          expectations are key elements in achieving design excellence and 
          customer satisfaction.
        </p>
        <img src="https://res.cloudinary.com/damamkuye/image/upload/v1742520536/house2_cot55t.jpg" alt="Project Monitoring" />
      </div>
    </div>
    </>
  );
};

export default ProjectSupervision;
