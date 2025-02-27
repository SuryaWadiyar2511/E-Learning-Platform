import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css"; // Import styles
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import FontAwesome

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* About Section */}
        <div className="footer-section">
          <h3>About Us</h3>
          <p>
            Welcome to our e-learning platform. Learn, track progress, and get certified!
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/courses">Courses</Link></li>
            <li><Link to="/dashboard">My Dashboard</Link></li>
            <li><Link to="/quiz">Take a Quiz</Link></li>
            <li><Link to="/faq">FAQs</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>

      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} E-Learning Platform. All rights reserved.</p>
        <Link to="/terms">Terms & Conditions</Link> | <Link to="/privacy">Privacy Policy</Link>
      </div>
    </footer>
  );
};

export default Footer;
