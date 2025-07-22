import React from "react";
import poster6 from "../../assets/poster6.jpg";
import { motion } from "framer-motion";

const FertilizerInfo = () => {
  return (
    <section className="bg-gradient-to-br from-[#005E34] to-[#0B3E2A] text-white py-12 md:py-20 px-4 sm:px-6 md:px-16 rounded-tl-[40px] md:rounded-tl-[60px] rounded-br-[40px] md:rounded-br-[60px] max-w-7xl mx-auto my-8 md:my-14 shadow-xl">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-8 md:gap-14">
        {/* Text Section */}
        <motion.div
          className="lg:w-1/2 w-full"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#FFA336] mb-4 md:mb-6 leading-tight md:leading-snug tracking-tight">
            HFPL Pure Diatomite <br className="hidden sm:block" /> Silicon Granules
          </h2>
          <ul className="space-y-2 md:space-y-3 text-sm sm:text-base text-gray-200 leading-relaxed">
            <li>
              <span className="font-semibold text-white">Type:</span> Beneficial Element Fertilizer
            </li>
            <li>
              <span className="font-semibold text-white">Net Weight:</span> 5 KG
            </li>
            <li>
              Diatomite Silicon Granules are specially developed to enhance
              plant strength, improve soil health, and boost overall crop yield.
              With high silicon content, it promotes resistance against pests,
              disease, and environmental stress.
            </li>
          </ul>
          <div className="mt-4 md:mt-6 text-sm sm:text-base text-gray-200">
            <p>
              Packed & Marketed by:
              <br />
              <span className="font-semibold text-white">
                Hemant Fertilizers Pvt. Ltd.
              </span>
              <br />
              G-14, Site-1 Indl. Estate, Unnao (U.P.)
            </p>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="lg:w-1/2 w-full flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="rounded-2xl md:rounded-3xl overflow-hidden shadow-xl md:shadow-2xl hover:scale-105 transition-transform duration-500 ease-in-out w-full max-w-xs sm:max-w-sm">
            <img
              src={poster6}
              alt="Fertilizer Poster"
              className="w-full h-auto object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FertilizerInfo;