import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0B3E2A] text-white pt-16 pb-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand Info */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Hemant Fertilizer's</h3>
          <p className="text-gray-300 text-sm">
            Driving sustainable agriculture with trusted products and farmer-first service.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#solutions" className="hover:text-white">Solutions</a></li>
            <li><a href="#sustainability" className="hover:text-white">Sustainability</a></li>
            <li><a href="#news" className="hover:text-white">News & Insights</a></li>
            <li><a href="#contact" className="hover:text-white">Contact Us</a></li>
          </ul>
        </div>

        {/* Products */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Products</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Fertilizers</li>
            <li>Crop Protection</li>
            <li>Bio-Products</li>
            <li>Soil Enhancers</li>
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
        © {new Date().getFullYear()} Hemant Fertilizer's. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
