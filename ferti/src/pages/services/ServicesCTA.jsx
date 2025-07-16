import React from "react";
import { Link } from "react-router-dom"; // or next/link if using Next.js

const ServicesCTA = () => {
  return (
    <section className="bg-green-800 text-white py-16 px-6 md:px-12 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Boost Your Crop Performance?
        </h2>
        <p className="text-lg mb-8">
          Hemant Fertilizer’s is here to guide you with the right solution for every season and soil. Let's grow together!
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Link
            to="/contact"
            className="bg-white text-green-800 px-6 py-3 rounded-full font-medium hover:bg-green-100 transition"
          >
            Contact Us
          </Link>
          <Link
            to="/services"
            className="bg-white text-green-800 px-6 py-3 rounded-full font-medium hover:bg-green-100 transition"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesCTA;
