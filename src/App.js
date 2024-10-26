import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Privacy from './pages/Privacy';
import Disclaimer from './pages/Disclaimer';
import Header from './components/Header';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import NotFound from './pages/NotFound';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Subscription from './components/Subscription';
import UserDashboard from './components/Dashboard/UserDashboard';
import AIDiagnosis from './components/AIDiagnosis';
import AIPrescription from './components/AIPrescription';


function App() {
  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="*" element={<NotFound />} />
        <Route path="/about-us" element={<AboutUs/>} />
        <Route path="/contact-us" element={<ContactUs/>} />
        <Route path="/subscription" element={<Subscription />}/>
        <Route path="/dashboard" component={UserDashboard} />
        <Route path="/diagnosis" element={<AIDiagnosis />} />
        <Route path="/prescription" element={<AIPrescription />} />
        </Routes>
      </div>
      <Footer />
      <Chatbot />
    </Router>
  );
}

export default App;
