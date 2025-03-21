import React from 'react';
import { useRentProperties } from '../../Libs/properties';
import './Property.css';

function Rentproperty() {
    const { properties } = useRentProperties();
  return (
    <div>
      <div className="rent-header">
        
        <div className="header-text">
            <span>
                <a href="/">HOME </a> <p>Rent</p>
            </span>
            <h2>Rent Apartment</h2>
        </div>
      </div>
      <div className="rent-property-container">
      <h2 className="section-title">Explore Our Premium Rental Properties</h2>
      <div className="property-grid">
        {properties.map((property, index) => (
          <div key={index} className="property-card">
            <img src={property.image} alt={property.title} className="property-image" />
            <div className="property-details">
              <h3>{property.title}</h3>
              <p className="location">{property.location}</p>
              <p className="description">{property.description}</p>
              <p className="price">{property.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>


    </div>
  )
}

export default Rentproperty
