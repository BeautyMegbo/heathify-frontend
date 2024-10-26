import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo/Healthify™ Logo.jpg'; // Adjust the path as necessary
import './Header.css';

const Header = () => (
  <header>
    <div className="logo-container">
      <img src={logo} alt="Healthify™ Logo" className="logo" />
      <h1>Healthify™</h1>
    </div>
    
    <nav>

<div className="dropdown">
        <button className="dropbtn">Our Pages</button>
        <div className="dropdown-content">
      <Link to="/">Home</Link><Link to="/about-us">About Us</Link>
      <Link to="/contact-us">Contact Us</Link>
      <Link to="/login">Login</Link>                          
       <Link to="/register">Register</Link>
       <Link to="/disclaimer">Disclaimer</Link>
       </div>
       </div>

      <div className="dropdown">
        <button className="dropbtn">Our Platform</button>
        <div className="dropdown-content">
          <Link to="/self-service-automation">Self-Service & Automation</Link>
          <Link to="/digital-patient-portal">Digital Patient Portal</Link>
          <Link to="/white-label-customization">White-label & Customization</Link>
          <Link to="/chat-video-meetings">Chat/Video Meetings</Link>
          <Link to="/patient-monitoring">Patient Monitoring & Referrals</Link>
          <Link to="/technology-support">Technology & Support</Link>
        </div>
      </div>

      <div className="dropdown">
        <button className="dropbtn">Insights</button>
        <div className="dropdown-content">
          <Link to="/gdpr-compliance">GDPR Compliance</Link>
          <Link to="/news">News</Link>
          <Link to="/articles">Articles</Link>
          <Link to="/podcast">Podcast</Link>
        </div>
      </div>
    </nav>
  </header>
);

export default Header;
