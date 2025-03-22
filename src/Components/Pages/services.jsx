import React from "react";
import { useServices } from "../../Libs/Services";
import { FiPlus } from "react-icons/fi";
import "./Services.css"; // Ensure styles are linked

const Services = () => {
  const { services } = useServices();

  return (
    <>
    <div className="service-header">
      <div className="header-wrap">
        <span>
          <a href="/">HOME /</a>
          <p>SERVICE</p>
        </span>
        <h2>Our Services</h2>
      </div>
    </div>
    <div className="services-container">
      <h2 className="section-title">Our Professional Services</h2>
        <p>Collaborative, innovative, and sustainable architectural design solutions for a better world.</p>
    <div className="check-service-con">
      
      <span> <p><FiPlus /></p>
        <a href="/architecturalplanning"> Architectural Planning</a></span>

      <span> <p><FiPlus /></p>
        <a href="/buildingconstruction">Building Construction</a></span>

      <span> <p><FiPlus /></p>
        <a href="/consultancy">Consultancy</a></span>

      <span> <p><FiPlus /></p>
        <a href="/estatemanagement">Estate Management</a></span>

      <span> <p><FiPlus /></p>
        <a href="/generalbuildingsuppliers">General Building Suppliers</a></span>

      <span> <p><FiPlus /></p>
        <a href="/homerenovation">Home Renovation</a></span>

      <span> <p><FiPlus /></p>
        <a href="/interiordesign">Interior Design</a></span>

      <span> <p><FiPlus /></p>
        <a href="/landsurveying">Land Surveying</a></span>

      <span> <p><FiPlus /></p>
        <a href="/projectsupervision">Project Supervision</a></span>

      <span> <p><FiPlus /></p>
        <a href="/propertydevelopment">Property Development</a></span>
      
      <span> <p><FiPlus /></p>
        <a href="/realestatemanagement">Real Estate Management</a></span>

      <span> <p><FiPlus /></p>
        <a href="/structuraldesign">Structural Design</a></span>

    </div>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-content">
              <h1>{service.icon}</h1>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
            <img className="service-image" src={service.image} alt="" />
            {/* <div className="service-image" style={{ backgroundImage: `url(${service.image})` }}></div> */}
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Services;
