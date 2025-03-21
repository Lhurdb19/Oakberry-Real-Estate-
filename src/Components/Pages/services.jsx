import React from "react";
import { useServices } from "../../Libs/Services";
import "./Services.css"; // Ensure styles are linked

const Services = () => {
  const { services } = useServices();

  return (
    <div className="services-container">
      <h2 className="section-title">Our Professional Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-content">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
            <div className="service-image" style={{ backgroundImage: `url(${service.image})` }}></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
