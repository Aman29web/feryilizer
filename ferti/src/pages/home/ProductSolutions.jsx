import React from "react";
import { FaLeaf, FaSeedling, FaTractor, FaFlask } from "react-icons/fa";
import { motion } from "framer-motion";

const solutions = [
  {
    title: "Fertilizers",
    icon: <FaLeaf className="text-5xl text-green-800" />,
    desc: "Enhance crop yield with our high-quality organic and chemical fertilizers.",
  },
  {
    title: "Crop Protection",
    icon: <FaFlask className="text-5xl text-green-800" />,
    desc: "Defend your crops with our scientifically formulated protection products.",
  },
  {
    title: "Bio-Products",
    icon: <FaSeedling className="text-5xl text-green-800" />,
    desc: "Eco-friendly solutions designed for sustainable agriculture.",
  },
  {
    title: "Farm Services",
    icon: <FaTractor className="text-5xl text-green-800" />,
    desc: "Expert guidance and services to support every stage of farming.",
  },
];

const ProductSolutions = () => {
  return (
    <section className="bg-[#fffef3] py-20 px-6 md:px-12" id="solutions">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-12">
          Our Agricultural Solutions
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-orange-100 text-green-900 rounded-2xl shadow-lg px-6 py-10 text-center
                         flex flex-col items-center space-y-4 border border-orange-300 hover:shadow-orange-200 transition"
            >
              <div>{item.icon}</div>
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-sm leading-relaxed text-green-800">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSolutions;
