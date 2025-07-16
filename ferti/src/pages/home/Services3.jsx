import React from 'react';
import img1 from "../../assets/img15.jpeg"
import img2 from "../../assets/img16.jpeg"
import img3 from "../../assets/img17.jpg"
import img4 from "../../assets/img18.jpeg"
import img5 from "../../assets/img19.jpeg"

// --- SVG Icon for the arrow ---
// Updated to a North-East arrow to match the new design.
// It's thicker and has a more prominent hover effect.
const ArrowIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    strokeWidth={2.5} // A slightly thicker stroke
    stroke="currentColor" 
    className="w-8 h-8 text-green-500 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1 group-hover:translate-x-1"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
  </svg>
);


// --- Reusable Product Card Component ---
// This component's structure is completely redesigned to match the new image.
// It uses an overlay div to create the "cutout" corner effect.
const ProductCard = ({ imageSrc, title }) => {
  return (
    <div className="bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 ease-in-out flex flex-col group cursor-pointer transform hover:-translate-y-1">
      
      {/* Image container with relative positioning for the overlay */}
      <div className="relative w-full aspect-[4/3] rounded-t-3xl overflow-hidden">
        
        {/* The image itself */}
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x300/e2e8f0/94a3b8?text=Image+Not+Found'; }}
        />
        
        {/* This div creates the "cutout" effect by overlaying the corner with the page's background color. */}
        {/* The shape is a quarter circle created with border radius. */}
        <div className="absolute bottom-0 right-0 h-20 w-20 bg-[#F9F6F2] rounded-tl-full"></div>

        {/* Arrow positioned over the cutout area */}
        <div className="absolute bottom-5 right-5">
            <ArrowIcon />
        </div>
      </div>
      
      {/* Content section below the image */}
      <div className="p-5 w-full mt-auto">
        <h3 className="text-xl font-semibold text-gray-700">{title}</h3>
      </div>
    </div>
  );
};


// --- Main Section Component ---
// Renamed to Services3 to be used as a modular component in your website.
export default function Services3() {
  // Data with relevant image URLs for the new design.
  const services = [
    {
      title: 'Fertilisers',
      imageSrc: img1,
    },
    {
      title: 'Speciality Nutrients',
      imageSrc: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=2070&auto=format&fit=crop',
    },
    {
      title: 'Organic Fertilisers',
      imageSrc: img5,
    },
    {
      title: 'Crop Protection',
      imageSrc: img2,
    },
    {
      title: 'Bio Products',
      imageSrc: img4,
    },
    {
      title: 'Retail',
      imageSrc: 'https://images.unsplash.com/photo-1580913428023-02c695666d61?q=80&w=2070&auto=format&fit=crop',
    },
  ];

  return (
    <div className="bg-[#F9F6F2] font-sans w-full py-16">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center md:text-left mb-12">
          <p className="text-lg font-semibold text-amber-600 mb-2">Our Products & Services</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">What We Serve</h2>
        </div>

        {/* Grid of Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {services.map((service, index) => (
            <ProductCard key={index} title={service.title} imageSrc={service.imageSrc} />
          ))}
        </div>
      </div>
    </div>
  );
}
