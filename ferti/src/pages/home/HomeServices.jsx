import React from "react";
import { FaLeaf, FaBug, FaMicroscope, FaHandsHelping } from "react-icons/fa";
import { motion } from "framer-motion";

const services = [
  {
    title: "Fertilizer Solutions",
    icon: <FaLeaf className="text-3xl text-green-700" />,
    desc: "Nutrient-rich fertilizers tailored for different crops and soil types.",
  },
  {
    title: "Crop Protection",
    icon: <FaBug className="text-3xl text-green-700" />,
    desc: "Advanced pest and disease control for long-lasting crop health.",
  },
  {
    title: "Soil Testing",
    icon: <FaMicroscope className="text-3xl text-green-700" />,
    desc: "Accurate soil analysis services to guide precise fertilization.",
  },
  {
    title: "Farmer Advisory",
    icon: <FaHandsHelping className="text-3xl text-green-700" />,
    desc: "Expert guidance to boost productivity and sustainable practices.",
  },
];

const HomeServices = () => {
  return (
    <section className="bg-green-50 py-20 px-6 md:px-12" id="home-services">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-12">
          Our Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="mb-4 flex justify-center">{item.icon}</div>
              <h3 className="text-xl font-semibold text-green-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA to Services Page */}
        <div className="mt-10">
          <a
            href="/services"
            className="inline-block bg-green-700 text-white px-6 py-3 rounded-full font-medium hover:bg-green-800 transition"
          >
            View All Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomeServices;
