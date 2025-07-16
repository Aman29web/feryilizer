import React, { useState } from "react";

const faqs = [
  {
    question: "What types of fertilizers do you offer?",
    answer:
      "We offer organic, chemical, and customized fertilizers designed to meet the needs of different crops and soil conditions.",
  },
  {
    question: "How can I become a distributor?",
    answer:
      "You can reach out via our contact form or call our support team. We'll guide you through the partnership process step by step.",
  },
  {
    question: "Do you offer support to individual farmers?",
    answer:
      "Absolutely. Our team provides soil testing, usage guidance, and crop consultation to both individuals and groups.",
  },
  {
    question: "Where do you ship your products?",
    answer:
      "We deliver across India through a reliable logistics network. Delivery timelines vary based on region and order size.",
  },
];

const ContactFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-20 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-green-900 text-center mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg shadow-sm"
            >
              <button
                onClick={() => toggleIndex(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left text-green-800 font-medium focus:outline-none"
              >
                {faq.question}
                <span className="text-xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-700 text-sm">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactFAQ;
