import React from "react";

const InnovationSection = () => {
  return (
    <section className="bg-gradient-to-br from-[#005E34] to-[#0B3E2A] text-white p-8 md:p-16 rounded-[60px] max-w-7xl mx-auto mt-12">
      <div className="flex flex-col lg:flex-row justify-between gap-12">
        {/* Left Section */}
        <div className="lg:w-2/3">
          <h2 className="text-4xl md:text-5xl font-semibold text-orange-400 leading-tight mb-6">
            Tying Together <br />
            Innovation, Manufacturing <br /> and Technology
          </h2>
          <p className="text-gray-200 leading-relaxed mb-6">
            We innovate and introduce advanced farm technologies to create
            unique crop solutions and drive farm prosperity. By deeply
            understanding the evolving needs of Indian agriculture, we develop
            tailored products and services that address real challenges faced by
            farmers. From precision nutrients to specialized crop care, our
            solutions are designed to improve yield quality, increase resilience,
            and promote sustainable farming practices across diverse agro-climatic
            zones.
          </p>
          <p className="text-gray-200 leading-relaxed">
            Our state-of-the-art R&D and manufacturing facilities are tightly
            integrated with farmer feedback loops, ensuring every innovation is
            both practical and field-tested. Through continuous collaboration with
            farmers, agri-scientists, and extension teams, we bring science to the
            soil in a way that’s meaningful and measurable. This commitment to
            co-creating solutions enables us to deliver not just products, but
            long-term value to the farming community and the nation’s food
            security.
          </p>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/3 flex flex-col gap-8">
          <div>
            <h3 className="text-orange-400 text-xl font-semibold mb-2">
              Innovation
            </h3>
            <p className="text-gray-200">
              Our research centers are always hard at work to discover and create
              novel solutions for the betterment of the farmers.
            </p>
          </div>
          <div>
            <h3 className="text-orange-400 text-xl font-semibold mb-2">
              Manufacturing
            </h3>
            <p className="text-gray-200">
              With 18 manufacturing facilities, we are sought out for our
              fertilisers, crop protection, bio-pesticides and water soluble
              fertilisers. We’ve also made a strategic investment for upstream
              integration.
            </p>
          </div>
          <div>
            <h3 className="text-orange-400 text-xl font-semibold mb-2">
              Technology
            </h3>
            <p className="text-gray-200">
              We have made it extremely easy for farmers to easily adopt new
              technologies with our farm mechanization services in partnership
              with companies like Yanmar in Japan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnovationSection;
