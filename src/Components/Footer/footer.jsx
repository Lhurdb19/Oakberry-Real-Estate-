import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTelegramPlane, FaTwitter, FaLinkedinIn, FaTiktok, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <h2>Creativity</h2>
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
              <Link to='/losangelesrent'>Properties</Link>
              <Link to='/rentproperty'>Rent Property</Link>
              <Link to='/saleproperty'>Sale Property</Link>
              <Link to='/'>Clents Review</Link>
            </ul>
          </div>

          <div>
            <h3>Company</h3>
            <ul>
              <Link to='/'>Home</Link>
              <Link to='/ouragent'>Our Agents</Link>
              <Link to='/aboutus'>About</Link>
              <Link to='/realestateblogs'>Blogs</Link>
              <Link to='/contact'>Contact Us</Link>
            </ul>
          </div>

          <div>
            <h3>Quick Links</h3>
            <ul>
              <Link to='/'>Terms & Conditions</Link>
              <Link to='/'>User's Support</Link>
              <Link to='/'>Support Center</Link>
              <Link to='/aboutus'>Press Info</Link>
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
      <footer className="bottom-footer">&copy; {currentYear} Creativity All Right Reserved. Made By <Link>HejiDev</Link> </footer>
    </footer>
  );
};

export default Footer;
