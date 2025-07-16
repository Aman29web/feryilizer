import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";

const testimonials = [
  {
    name: "Olivia Wilson",
    text: "Thank you very much! An amazing job that exceeds all expectations! I am very glad that I trusted you!",
    rating: 5,
    image: "/pics/testi1.jpg",
  },
  {
    name: "John Doe",
    text: "The team delivered outstanding results. Highly recommended!",
    rating: 5,
    image: "/pics/testi2.jpg",
  },
  {
    name: "Sophia Lee",
    text: "Exceptional service and support. Truly a fantastic experience!",
    rating: 5,
    image: "/pics/testi3.jpg",
  },
  {
    name: "Michael Brown",
    text: "High-quality work delivered on time. Couldn't ask for more!",
    rating: 5,
    image: "/pics/testi4.jpg",
  },
  {
    name: "Emma Davis",
    text: "A seamless experience from start to finish. Highly recommend!",
    rating: 5,
    image: "/pics/testi5.jpg",
  },
];

const TestimonialSlider = () => {
  return (
    <section className="w-full py-24 px-6 bg-[#EEEBB8] text-[#041E1D]">
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          What Our Clients Say
        </h2>
        <p className="text-lg text-[#041E1D]/80 max-w-2xl mx-auto">
          Real stories. Real impact. See how we’ve made a difference for our clients.
        </p>
      </div>

      {/* Slider */}
      <div className="max-w-6xl mx-auto relative z-10">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
            el: ".custom-swiper-pagination",
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Pagination, Autoplay]}
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 10 },
            640: { slidesPerView: 1, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <div className="w-72 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center gap-4">
                <div className="w-20 h-20 rounded-full border-4 border-[#304D30]/30 p-1">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold text-center">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-[#041E1D]/80 text-center">
                  {testimonial.text}
                </p>
                <div className="flex text-yellow-500">
                  {"⭐".repeat(testimonial.rating)}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Pagination Dots */}
        <div className="custom-swiper-pagination mt-8 flex justify-center gap-2"></div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
  