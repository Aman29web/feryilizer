import React from "react";
import { FaBullseye, FaEye, FaHandshake } from "react-icons/fa";

const content = [
  {
    title: "Our Mission",
    icon: <FaBullseye className="text-3xl text-green-700 mb-4" />,
    text: "To empower farmers through sustainable and effective agricultural solutions that increase productivity and nurture the soil.",
  },
  {
    title: "Our Vision",
    icon: <FaEye className="text-3xl text-green-700 mb-4" />,
    text: "To be India’s most trusted and innovative agri-support partner, delivering growth with responsibility and care.",
  },
  {
    title: "Our Values",
    icon: <FaHandshake className="text-3xl text-green-700 mb-4" />,
    text: "Integrity, Innovation, Sustainability, and a Farmer-First approach guide everything we do.",
  },
];

const MissionVisionSection = () => {
  return (
    <section className="bg-green-50 py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-green-900 mb-12">
          Our Mission, Vision & Values
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {content.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition"
            >
              {item.icon}
              <h3 className="text-xl font-semibold text-green-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;
