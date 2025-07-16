import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const results = [
  {
    image: "/assets/results-before.jpg",
    title: "Before Fertilizer Use",
    desc: "Low yield, uneven crop growth and poor soil structure.",
  },
  {
    image: "/assets/results-after.jpg",
    title: "After Fertilizer Use",
    desc: "High yield, vibrant plants, and healthy root development.",
  },
  {
    image: "/assets/results-harvest.jpg",
    title: "Improved Harvest",
    desc: "Increased productivity and better crop quality for market.",
  },
];

const FertilizerResultCarousel = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-green-900 mb-12">
          Visual Impact of Our Fertilizers
        </h2>

        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          loop={true}
          autoplay={{ delay: 3000 }}
          coverflowEffect={{
            rotate: 40,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="w-full max-w-4xl"
        >
          {results.map((item, index) => (
            <SwiperSlide
              key={index}
              className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center"
              style={{ width: "300px" }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="rounded-lg h-64 object-cover mb-4"
              />
              <h3 className="text-xl font-semibold text-green-800 mb-1">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default FertilizerResultCarousel;
