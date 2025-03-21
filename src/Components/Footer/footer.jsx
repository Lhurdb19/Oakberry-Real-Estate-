import React from "react";
import { FaFacebookF, FaInstagram, FaTelegramPlane, FaTwitter, FaLinkedinIn, FaTiktok, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <h2>Oakberry Real Estate Agency</h2>
          <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTelegramPlane /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaTiktok /></a>
            <a href="#"><FaWhatsapp /></a>
          </div>
        </div>

        <div className="footer-links">
          <div>
            <h3>Offers</h3>
            <ul>
              <li>Properties</li>
              <li>Agents</li>
              <li>Locations</li>
              <li>Clients Support</li>
            </ul>
          </div>

          <div>
            <h3>Company</h3>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Blog</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div>
            <h3>Quick Links</h3>
            <ul>
              <li>Terms & Conditions</li>
              <li>User's Guide</li>
              <li>Support Center</li>
              <li>Press Info</li>
            </ul>
          </div>
        </div>

        <div className="footer-contact">
          <h3>Have a Question?</h3>
          <p>203 Fake St. Mountain View, San Francisco, California, USA</p>
          <p><a href="tel:+23923929210">+2 392 3929 210</a></p>
          <p><a href="mailto:info@yourdomain.com">info@yourdomain.com</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
