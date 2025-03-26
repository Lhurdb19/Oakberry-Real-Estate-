import React, { useState } from 'react';
import './Cookies.css';

const CookiesConsent = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleAccept = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookiesAccepted", "false");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="cookies-container">
      <p className="cookies-text">
        We use cookies to enhance your experience on our website. By continuing, 
        you agree to our <a href="/privacy-policy">Privacy Policy</a>.
      </p>
      <div className="cookies-buttons">
        <button className="accept-btn" onClick={handleAccept}>Accept</button>
        <button className="reject-btn" onClick={handleReject}>Reject</button>
      </div>
    </div>
  );
};

export default CookiesConsent;
