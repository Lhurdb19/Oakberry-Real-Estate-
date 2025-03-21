import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Contact.css"; 

const messages = [
  "Do you have a project in mind?",
  "Looking for expert guidance?",
  "Let's build something incredible!",
  "We’re here to bring your vision to life.",
  "Don’t hesitate to reach out to us!",
];

const ContactSection = () => {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageIndex, setMessageIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const message = messages[messageIndex];

      if (!isDeleting && charIndex < message.length) {
        setCurrentMessage((prev) => prev + message[charIndex]);
        setCharIndex((prev) => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        setCurrentMessage((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      } else if (!isDeleting && charIndex === message.length) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setMessageIndex((prev) => (prev + 1) % messages.length);
      }
    };

    const typingSpeed = isDeleting ? 50 : 100;
    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, messageIndex]);

  return (
    <motion.section
      className="contact-section"
      initial={{ opacity: 1, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.h2
        className="contact-text"
        key={currentMessage}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {currentMessage}
        <motion.span
          className="cursor"
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 1 }}
        >
          |
        </motion.span>
      </motion.h2>

      <motion.a
        href="/contact"
        className="contact-btn"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        Contact Us🚀
      </motion.a>
    </motion.section>
  );
};

export default ContactSection;
