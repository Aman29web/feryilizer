import React from "react";
import { FaSeedling, FaCertificate, FaTruck, FaUsers } from "react-icons/fa";

const reasons = [
  {
    icon: <FaSeedling className="text-3xl text-green-700 mb-4" />,
    title: "Sustainable Products",
    desc: "Eco-friendly solutions that enrich the soil and ensure long-term crop health.",
  },
  {
    icon: <FaCertificate className="text-3xl text-green-700 mb-4" />,
    title: "Quality Assured",
    desc: "Our fertilizers and agri-products go through strict quality checks and lab testing.",
  },
  {
    icon: <FaTruck className="text-3xl text-green-700 mb-4" />,
    title: "Reliable Delivery",
    desc: "On-time distribution across India, even in remote agricultural regions.",
  },
  {
    icon: <FaUsers className="text-3xl text-green-700 mb-4" />,
    title: "Farmer-Centric Approach",
    desc: "Support, training, and guidance tailored to every farmer's need.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-green-900 mb-12">
          Why Choose Hemant Fertilizer’s?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-green-50 rounded-xl p-6 shadow-md hover:shadow-lg transition"
            >
              {reason.icon}
              <h3 className="text-xl font-semibold text-green-800 mb-2">
                {reason.title}
              </h3>
              <p className="text-gray-600 text-sm">{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
