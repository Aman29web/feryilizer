import React from "react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const ContactCTA = () => {
  return (
    <section className="bg-[#0B3E2A] text-white py-16 px-6 md:px-12 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Still Have Questions?
        </h2>
        <p className="text-lg mb-8">
          Our team is always ready to help. Call us directly or reach out via WhatsApp to speak with a Hemant Fertilizer expert.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a
            href="tel:+919876543210"
            className="inline-flex items-center justify-center gap-2 bg-white text-green-800 px-6 py-3 rounded-full font-medium hover:bg-green-100 transition"
          >
            <FaPhoneAlt /> Call Us Now
          </a>

          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-white text-green-800 px-6 py-3 rounded-full font-medium hover:bg-green-100 transition"
          >
            <FaWhatsapp /> Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
