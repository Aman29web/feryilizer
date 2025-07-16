import React from "react";
import { Link } from "react-router-dom"; // Use `next/link` if using Next.js

const services = [
  {
    id: "fertilizer-solutions",
    title: "Fertilizer Solutions",
    image: "/assets/service-fertilizer.jpg",
    desc: "High-quality organic and chemical fertilizers tailored to your soil type and crop needs.",
  },
  {
    id: "crop-protection",
    title: "Crop Protection",
    image: "/assets/service-cropprotection.jpg",
    desc: "Protect your harvest with our pest, weed, and disease management products and consulting.",
  },
  {
    id: "soil-testing",
    title: "Soil Testing",
    image: "/assets/service-soil.jpg",
    desc: "Get professional lab-based soil testing and personalized nutrient plans.",
  },
  {
    id: "bio-products",
    title: "Bio Products",
    image: "/assets/service-bio.jpg",
    desc: "Eco-friendly bio stimulants and microbial solutions for sustainable agriculture.",
  },
  {
    id: "farmer-training",
    title: "Farmer Training & Advisory",
    image: "/assets/service-training.jpg",
    desc: "Workshops, one-on-one sessions, and digital advisory to help farmers make informed decisions.",
  },
  {
    id: "equipment-support",
    title: "Equipment Support",
    image: "/assets/service-equipment.jpg",
    desc: "Help in selecting and using agri-machinery for better efficiency and productivity.",
  },
];

const ServicesGrid = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-12">
          Explore Our Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service) => (
            <Link
              to={`/services/${service.id}`}
              key={service.id}
              className="bg-green-50 rounded-xl shadow-md hover:shadow-xl transition duration-300 group"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover rounded-t-xl group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold text-green-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
