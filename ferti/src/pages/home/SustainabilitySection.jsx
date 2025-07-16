import React from "react";
import { motion } from "framer-motion";
import { FaHandsHelping, FaRecycle, FaTree } from "react-icons/fa";

const initiatives = [
  {
    title: "Rural Empowerment",
    icon: <FaHandsHelping className="text-4xl text-green-200" />, // Lighter icon for contrast
    desc: "We actively support farmers and rural communities through education and employment programs.",
  },
  {
    title: "Eco-Friendly Practices",
    icon: <FaRecycle className="text-4xl text-green-200" />, // Lighter icon for contrast
    desc: "Our production methods focus on minimizing waste and maximizing resource efficiency.",
  },
  {
    title: "Greener Tomorrow",
    icon: <FaTree className="text-4xl text-green-200" />, // Lighter icon for contrast
    desc: "Committed to tree plantation drives and soil health improvement across the region.",
  },
];

const SustainabilitySection = () => {
  return (
    <section className="bg-[var(--light)] py-20 px-6 md:px-12" id="sustainability">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-12">
          Sustainability & CSR Initiatives
        </h2>

        {/* Unique Layout: Using flexbox with wrap and centered alignment for a flowing look */}
        <div className="flex flex-wrap justify-center items-stretch gap-8">
          {initiatives.map((item, index) => (
            <motion.div
              key={index}
              // Main 'Module' Styling:
              // - Uses a rich gradient background for a permanent visual impact.
              // - Extremely rounded corners (`rounded-[3rem]`) for a soft, pebble-like shape.
              // - Stronger shadow for a 'floating' effect.
              // - Min-width to ensure content fits, max-w-md to prevent stretching too wide.
              // - Flex column for content stacking, with centered text.
              className="relative bg-[#0B3E2A]
                         rounded-[3rem] shadow-xl p-8 transform
                         flex flex-col items-center text-center text-white
                         min-w-[280px] max-w-sm w-full md:w-auto
                         transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
            >
              {/* Icon with a subtle, contrasting backdrop */}
              <div className="p-5 mb-4 rounded-full bg-white/20 backdrop-blur-sm inline-flex items-center justify-center">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-white/90 text-base leading-relaxed flex-grow">
                {item.desc}
              </p>

              {/* Optional: Add a subtle, bottom accent that's part of the flowing design */}
              <div className="w-1/3 h-1 bg-green-200/50 rounded-full mt-6"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection;