import React from 'react';
import './Home.css';
import AppointmentForm from '../components/AppointmentForm';
import HealthTracking from '../components/HealthTracking';
import Blog from '../components/Blog';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
     <h1>Welcome to Healthify™</h1>
      <p>Your one-stop solution for healthcare and wellness.</p>
      {/* Additional content and styling */}
    <AppointmentForm />
    <HealthTracking />
    <Blog />
  </div>
);
<div className="dropdown">
<button className="dropbtn">Our Platform</button>
<div className="dropdown-content">
  <Link to="/subscription">Subscription</Link>

</div>
</div>
export default Home;
