import React from "react";
import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section
      className="relative bg-green-800 text-white py-20 px-6 md:px-12 overflow-hidden"
      id="cta"
    >
      {/* Animated glowing backdrop using built-in Tailwind classes only */}
      <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-[450px] h-[450px] bg-orange-300/20 rounded-full blur-3xl animate-[ping_3s_ease-in-out_infinite]" />

      <motion.div
        className="relative z-10 max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-3xl md:text-5xl font-bold mb-6 tracking-tight"
          whileHover={{ scale: 1.02 }}
        >
          <span className="bg-gradient-to-r from-orange-200 via-white to-orange-100 bg-clip-text text-transparent">
            Ready to Boost Your Harvest?
          </span>
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl mb-10 text-white/90"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Join thousands of farmers across India using Hemant Fertilizer's trusted solutions.
        </motion.p>

        <motion.a
          href="#contact"
          whileHover={{ scale: 1.06 }}
          className="inline-block bg-white text-green-800 font-semibold px-7 py-3 rounded-full shadow-lg 
                     hover:bg-green-100 hover:shadow-xl transition relative overflow-hidden"
        >
          Contact Our Team
        </motion.a>
      </motion.div>
    </section>
  );
};

export default CTASection;
