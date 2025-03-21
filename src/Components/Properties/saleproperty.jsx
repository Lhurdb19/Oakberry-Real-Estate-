import React from 'react';
import { useSalesProperties } from '../../Libs/salesProperties';
import './Property.css';

function Saleproperty() {
  const { properties } = useSalesProperties();
  return (
    <div>
        <div className="sale-header">
           
        <div className="header-text">
            <span>
                <a href="/">HOME </a> <p>Rent</p>
            </span>
            <h2>Sale Apartment</h2>
        </div>
        </div>
        
        <div className="sales-property-container">
      <h2 className="section-title">Discover Premium Properties for Sale</h2>
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

export default Saleproperty;
