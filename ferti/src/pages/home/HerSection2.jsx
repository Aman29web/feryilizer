import React from 'react';
import { motion } from 'framer-motion';
import heroVideo from '../../assets/v6.mp4'; // ✅ import your video

const HeroSection2 = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4 text-center pt-6"
      style={{ backgroundColor: '#EEEBB8', color: '#041E1D' }}
    >
      <motion.h1
        className="text-2xl sm:text-3xl md:text-4xl font-bold max-w-4xl leading-tight tracking-wide"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <span className="block">IN A WORLD OF</span>
        <span style={{ color: '#041E1D' }}>ALGORITHMS</span>, WE INJECT
        <br />
        <span style={{ color: '#041E1D' }}>SOUL-TRANSFORMING CLICKS</span> INTO DIGITAL CONNECTIONS
      </motion.h1>

      <motion.div
        className="mt-10 w-[90vw] h-[70vh] shadow-lg overflow-hidden bg-black rounded-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
      >
        <video
          src={heroVideo}
          loop
          autoPlay
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      </motion.div>
    </div>
  );
};

export default HeroSection2;
