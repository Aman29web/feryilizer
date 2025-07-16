import React from "react";
import { FaComments, FaFlask, FaTruck, FaHandsHelping } from "react-icons/fa";

const steps = [
  {
    icon: <FaComments className="text-4xl text-green-700 mb-4" />,
    title: "Consultation",
    desc: "We begin by understanding your crop, soil, and seasonal goals through expert consultation.",
  },
  {
    icon: <FaFlask className="text-4xl text-green-700 mb-4" />,
    title: "Customized Recommendation",
    desc: "Based on lab testing or discussions, we suggest the best fertilizers and protection products.",
  },
  {
    icon: <FaTruck className="text-4xl text-green-700 mb-4" />,
    title: "Timely Delivery",
    desc: "Products are delivered on-time to your farm or nearby channel partner/distributor.",
  },
  {
    icon: <FaHandsHelping className="text-4xl text-green-700 mb-4" />,
    title: "Post-Service Support",
    desc: "Our agronomists assist with usage instructions, feedback tracking, and ongoing crop support.",
  },
];

const ServiceProcess = () => {
  return (
    <section className="bg-green-50 py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-12">
          How Our Services Work
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition"
            >
              {step.icon}
              <h3 className="text-xl font-semibold text-green-800 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceProcess;
