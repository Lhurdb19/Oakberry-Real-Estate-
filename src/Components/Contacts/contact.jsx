import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Contact.css";
import MultipleItems from "../Sliders/homesliders";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = "Enter a valid email";
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted successfully", formData);
    }
  };

  return (
    <>
    <MultipleItems/>
    <motion.section 
      className="contact-container"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="contact-info">
        <motion.div 
          className="contact-details"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 style={{fontSize:'27px'}}>Contact Us</h2>
          <p style={{fontSize:'17px'}}><strong>Address:</strong> Ayekale, Osogbo, Osun State</p>
          <p style={{fontSize:'17px'}}><strong>Email:</strong> hejidev19@gmail.com</p>
          <p style={{fontSize:'17px'}}><strong>Phone:</strong> +2347011560069</p>
        </motion.div>

        <motion.div 
          className="contact-map"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.619539520704!2d4.553287073791013!3d7.168607692855974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103786b873c4b4f3%3A0xf34a7384c3b4e0de!2sAyekale%2C%20Osogbo%2C%20Osun%20State!5e0!3m2!1sen!2sng!4v1700000000000"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </motion.div>
      </div>

      <motion.form 
        className="contact-form"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        onSubmit={handleSubmit}
      >
        <div className="form-grid">
          <div>
            <input 
              type="text" 
              name="firstName" 
              placeholder="First Name" 
              value={formData.firstName} 
              onChange={handleChange}
            />
            {errors.firstName && <small>{errors.firstName}</small>}
          </div>

          <div>
            <input 
              type="text" 
              name="lastName" 
              placeholder="Last Name" 
              value={formData.lastName} 
              onChange={handleChange}
            />
            {errors.lastName && <small>{errors.lastName}</small>}
          </div>

          <div>
            <input 
              type="tel" 
              name="phone" 
              placeholder="Phone Number" 
              value={formData.phone} 
              onChange={handleChange}
            />
            {errors.phone && <small>{errors.phone}</small>}
          </div>

          <div>
            <input 
              type="email" 
              name="email" 
              placeholder="Email Address" 
              value={formData.email} 
              onChange={handleChange}
            />
            {errors.email && <small>{errors.email}</small>}
          </div>
        </div>

        <textarea 
          name="message" 
          placeholder="Your Message" 
          rows="5" 
          value={formData.message} 
          onChange={handleChange}
        ></textarea>
        {errors.message && <small>{errors.message}</small>}

        <motion.button 
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Send Message
        </motion.button>
      </motion.form>
    </motion.section>
    </>
  );
};

export default Contact;
