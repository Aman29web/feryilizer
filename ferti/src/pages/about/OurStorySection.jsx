import React from "react";
import Lottie from "lottie-react";
// import ourStoryAnimation from "../../assets/our-story.json"; 
import ourStoryAnimation from "../../assets/Test.json"

const OurStorySection = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Lottie Animation */}
        <div className="md:w-1/2 w-full">
          <div className="rounded-2xl shadow-2xl overflow-hidden">
            <Lottie
              animationData={ourStoryAnimation}
              loop
              className="w-full h-auto max-h-[400px]"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="md:w-1/2 w-full">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B3E2A] mb-6 leading-tight">
            Our Journey
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4 text-lg">
            Founded with a vision to revolutionize Indian agriculture, <span className="font-semibold text-[#0B3E2A]">Hemant Fertilizers</span> began its journey in a small town with a big dream — to make quality farming solutions accessible to every farmer.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg">
            Over the years, we’ve grown from a regional supplier to a trusted national name, helping thousands of farmers improve crop yield, soil health, and profitability through innovation, care, and relentless commitment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurStorySection;
