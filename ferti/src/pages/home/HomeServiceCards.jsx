import React from "react";
import { Link } from "react-router-dom";
import pic1 from "../../assets/poster1.jpg";
import pic2 from "../../assets/poster2.jpg";
import pic3 from "../../assets/poster3.jpg";
import pic4 from "../../assets/poster4.jpg";
import pic5 from "../../assets/poster5.jpg";
import pic6 from "../../assets/poster6.jpg";

const homeServices = [
  {
    id: "fertilizer-solutions",
    title: "Fertilizer Solutions",
    image: pic1,
    desc: "Boost yield and soil fertility with our customized fertilizers.",
  },
  {
    id: "crop-protection",
    title: "Crop Protection",
    image: pic2,
    desc: "Protect crops from pests and diseases using eco-safe solutions.",
  },
  {
    id: "soil-testing",
    title: "Soil Testing",
    image: pic3,
    desc: "Get your soil tested and make data-driven farming decisions.",
  },
  {
    id: "bio-products",
    title: "Bio-Products",
    image: pic4,
    desc: "Eco-friendly bio-products for sustainable farming practices.",
  },
  {
    id: "farmer-advisory",
    title: "Farmer Advisory",
    image: pic5,
    desc: "Expert farming advice to maximize your productivity and profit.",
  },
  {
    id: "farm-equipment-support",
    title: "Farm Equipment Support",
    image: pic6,
    desc: "Get access to tools, machinery, and technical equipment support.",
  },
];

const HomeServiceCards = () => {
  return (
    <section className="bg-[#fffef3] py-20 px-6 md:px-12" id="services-preview">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-green-900 mb-12">
          What We Offer
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {homeServices.map((service) => (
            <Link
              to={`/services/${service.id}`}
              key={service.id}
              className="bg-orange-50 border border-orange-200 rounded-2xl shadow-md hover:shadow-orange-300 
                         transition duration-300 group flex flex-col overflow-hidden"
            >
              {/* Image section */}
              <div className="h-80 sm:h-96 lg:h-[28rem] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Content section */}
              <div className="p-6 text-left flex-grow">
                <h3 className="text-xl font-semibold text-green-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-green-900 text-sm">{service.desc}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12">
          <Link
            to="/services"
            className="inline-block bg-green-700 text-white px-6 py-3 rounded-full hover:bg-green-800 transition"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeServiceCards;
