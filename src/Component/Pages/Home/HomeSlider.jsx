import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Slider1 from "../../../assets/HomeSliderImage/Slider1.png";
import Slider2 from "../../../assets/HomeSliderImage/Slider2.jpg";
import Slider3 from "../../../assets/HomeSliderImage/Slider3.jpg";
import Slider4 from "../../../assets/HomeSliderImage/Slider4.jpg";
import Slider5 from "../../../assets/HomeSliderImage/Slider5.jpg";
import Slider6 from "../../../assets/HomeSliderImage/Slider6.jpg";
import Slider7 from "../../../assets/HomeSliderImage/Slider7.jpg";
import Slider8 from "../../../assets/HomeSliderImage/Slider8.jpg";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation, Autoplay } from "swiper/modules";

const slides = [
  Slider1,
  Slider2,
  Slider3,
  Slider4,
  Slider5,
  Slider6,
  Slider7,
  Slider8,
];

function HomeSlider() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="relative w-full overflow-hidden">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{
          nextEl: ".home-slider-next",
          prevEl: ".home-slider-prev",
        }}
        slidesPerView={1.15}
        centeredSlides={1}
        spaceBetween={16}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        className="home-swiper"
      >
        {slides.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="w-full  rounded-2xl bg-whitesmoke shadow-[0_18px_30px_-12px_rgba(0,0,0,0.35)]">
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="w-full rounded-4xl"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Prev button */}
      <button
        ref={prevRef}
        className="home-slider-prev absolute left-8 top-1/2 -translate-y-1/2 z-10
                   w-10 h-10 rounded-full bg-white border-2 border-gray-400 hover:bg-red-500 shadow-md flex items-center justify-center
                   transition"
        aria-label="Previous slide"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path
            d="M15 18l-6-6 6-6"
            stroke="black"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <button
        ref={nextRef}
        className="home-slider-next absolute right-8 top-1/2 -translate-y-1/2 z-10
                   w-10 h-10 rounded-full bg-white border-2 border-gray-400 hover:bg-red-500 shadow-md flex items-center justify-center
                    transition"
        aria-label="Next slide"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path
            d="M9 18l6-6-6-6"
            stroke="#000"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}

export default HomeSlider;
