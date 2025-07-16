import React from "react";
import Lottie from "lottie-react";
// import contactAnimation from "../../assets/contact-us.json"; 
import contactAnimation from "../../assets/Test2.json"

const ContactHeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-[#e9f6f1] to-[#d1ede3] py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
        {/* Left - Text Content */}
        <div className="lg:w-1/2 w-full text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0B3E2A] leading-tight mb-6">
            Get in Touch with Us
          </h1>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-8">
            We’re here to answer your questions, help with inquiries, or just chat about how we can support your agricultural needs. Drop us a message and we’ll get back to you shortly.
          </p>
          <a
            href="#contact-form"
            className="inline-block bg-[#0B3E2A] hover:bg-green-900 text-white font-semibold px-6 py-3 rounded-xl transition-all shadow-md hover:shadow-lg"
          >
            📬 Send Message
          </a>
        </div>

        {/* Right - Lottie Animation */}
        <div className="lg:w-1/2 w-full">
          <div className="rounded-2xl shadow-xl overflow-hidden">
            <Lottie
              animationData={contactAnimation}
              loop
              className="w-full h-auto max-h-[420px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHeroSection;
