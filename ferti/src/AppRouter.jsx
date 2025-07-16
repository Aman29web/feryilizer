import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeRouter from './pages/home/HomeRouter';
import AboutRouter from './pages/about/AboutRouter';
import Contactrouter from './pages/contact/Contactrouter';
import ServicesRouter from './pages/services/ServicesRouter';

const AppRouter = () => {
  return (
    <Router>
      <div className="pt-16"> {/* Padding to avoid hiding behind fixed navbar */}
        <Routes>
          <Route path="/" element={<HomeRouter/>} />
          <Route path="/aboutus" element={<AboutRouter/>} />
          <Route path="/contactus" element={<Contactrouter/>} />
          <Route path="/services" element={<ServicesRouter/>} />



          {/* <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </div>
    </Router>
  );
};
export default AppRouter
