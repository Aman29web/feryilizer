import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
// import logo from "./path-to-your-logo.png";
import logo from "../../assets/logo2.jpg"

const Footer = () => {
  return (
    <footer className="bg-[#0B3E2A] text-white pt-16 pb-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand Info with Logo */}
        <div className="flex flex-col">
          <div className="flex items-center mb-4">
            <img 
              src={logo} 
              alt="Hemant Fertilizers Logo" 
              className="h-12 w-auto mr-3" // Adjust size as needed
            />
            <h3 className="text-2xl font-bold">Hemant Fertilizers</h3>
          </div>
          <p className="text-gray-300 text-sm">
            Driving sustainable agriculture with trusted products and farmer-first service.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <Link to="/services" className="hover:text-white">Products</Link>
            </li>
            <li>
              <Link to="/aboutus" className="hover:text-white">About Us</Link>
            </li>
            <li>
              <Link to="/contactus" className="hover:text-white">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-green-200"><FaFacebookF /></a>
            <a href="#" className="text-white hover:text-green-200"><FaTwitter /></a>
            <a href="#" className="text-white hover:text-green-200"><FaInstagram /></a>
            <a href="#" className="text-white hover:text-green-200"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-sm text-gray-400 mt-10 border-t border-green-700 pt-6">
        © {new Date().getFullYear()} Hemant Fertilizers. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;