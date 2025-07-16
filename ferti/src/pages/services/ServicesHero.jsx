import React from "react";
import Lottie from "lottie-react";
// import servicesAnimation from "../../assets/services-animation.json"; 
import servicesAnimation from "../../assets/Test4.json"

const ServicesHero = () => {
  return (
    <section className="bg-gradient-to-br from-[#e7f7ef] to-[#d4eee2] py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
        {/* Left - Text */}
        <div className="lg:w-1/2 w-full text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0B3E2A] leading-tight mb-6">
            Explore Our Services
          </h1>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-8">
            From advanced fertilizers to precision agricultural consulting, our services are built to empower farmers with sustainable growth, better yield, and smarter solutions tailored for Indian agriculture.
          </p>
          <a
            href="#services-list"
            className="inline-block bg-[#0B3E2A] hover:bg-green-900 text-white font-semibold px-6 py-3 rounded-xl transition-all shadow-md hover:shadow-lg"
          >
            🌾 View Services
          </a>
        </div>

        {/* Right - Lottie */}
        <div className="lg:w-1/2 w-full">
          <div className="rounded-2xl shadow-xl overflow-hidden">
            <Lottie
              animationData={servicesAnimation}
              loop
              className="w-full h-auto max-h-[420px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
