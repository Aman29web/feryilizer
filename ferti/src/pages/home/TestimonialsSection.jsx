import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";
import pic1 from "../../assets/testimonial1.jpg"
import pic2 from "../../assets/testimonial2.webp"
import pic3 from "../../assets/testimonial3.webp"


const testimonials = [
  {
    name: "Rajeev Sharma",
    location: "Punjab, India",
    quote:
      "Hemant Fertilizer's products helped me increase my wheat yield by 30%! Truly reliable and affordable.",
    image: pic1,
  },
  {
    name: "Kavita Patel",
    location: "Gujarat, India",
    quote:
      "The organic line is excellent. Crops are healthier, and the service team is very supportive.",
    image: pic2,
  },
  {
    name: "Suresh Yadav",
    location: "Maharashtra, India",
    quote:
      "I’ve been using their fertilizers for over 2 years now — great results and always on time delivery.",
    image: pic3,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="bg-[var(--light)] py-20 px-6 md:px-12" id="testimonials">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-12">
          Trusted by Farmers Nationwide
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <FaQuoteLeft className="text-green-500 text-2xl mb-4" />
              <p className="text-gray-700 italic mb-4">"{item.quote}"</p>
              <div className="flex items-center gap-4 mt-6">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-green-600"
                />
                <div className="text-left">
                  <h4 className="text-green-800 font-semibold">{item.name}</h4>
                  <p className="text-sm text-gray-500">{item.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
