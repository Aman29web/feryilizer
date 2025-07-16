import React from "react";
import heroVideo from "../../assets/v6.mp4"; // adjust path as needed

const HeroSection = () => {
  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-center py-10 px-4 bg-white md:py-20">
      {/* Text Content */}
      <div className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left mb-8 md:mb-0 md:pr-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[var(--primary)] leading-tight">
          Welcome to GreenGrow
        </h1>
        <p className="text-lg md:text-2xl text-gray-700 mb-6 max-w-xl">
          Revolutionizing agriculture with sustainable solutions. Discover our innovative fertilizers and grow with confidence.
        </p>
        {/* Add CTA or buttons here if needed */}
      </div>
      {/* Video Content */}
      <div className="flex-1 w-full max-w-xl aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-contain"
        >
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default HeroSection;
