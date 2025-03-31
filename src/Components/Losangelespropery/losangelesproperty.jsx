import React, { useState } from "react";
import losAngelesData from "../../Libs/usePropertyRent"; // Import the data
import "./Losangeles.css";

const LosAngelesRent = () => {
  const [selectedBedrooms, setSelectedBedrooms] = useState(1);

  return (
    <>
    <div className="aparte-header">
        <img src="https://ik.imagekit.io/livlabs/ik-seo/pma/assets/iStock-1460658780_puC8XPjkCz/a-white-and-red-sign-advertises-a-house-for-rent.jpg?tr=w-auto,dpr-4,q-70" alt="" />
        <span>
            <h2>LOS ANGELES APARTMENT</h2>
        </span>
    </div>
      <div className="apartment-rent">
        <h1>Find Your Perfect Apartment in Los Angeles</h1>
        <div className="switch-container">
          {[1, 2, 3, 4, 5].map((num) => (
            <button
              key={num}
              className={`switch-btn ${
                selectedBedrooms === num ? "active" : ""
              }`}
              onClick={() => setSelectedBedrooms(num)}
            >
              {num} Bedroom{num > 1 ? "s" : ""}
            </button>
          ))}
        </div>

        <div className="apartment-list">
          {losAngelesData[selectedBedrooms].map((apartment, index) => (
            <div key={index} className="apartment">
              <img src={apartment.imageUrl} alt={apartment.location} />
              <h2>{apartment.location}</h2>
              <p>{apartment.description}</p>
              <p>
                <strong>Price:</strong> ${apartment.price}/month
              </p>
              <p>
                <strong>Bathrooms:</strong> {apartment.bathrooms}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default LosAngelesRent;
