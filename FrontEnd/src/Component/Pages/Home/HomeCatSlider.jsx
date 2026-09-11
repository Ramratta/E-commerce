import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation, Autoplay } from "swiper/modules";

const Slide = [
  {
    src: "https://demos.codezeel.com/wordpress/WCM06/WCM060133/wp-content/uploads/2024/04/cat-5-1.jpg",
    title: "chair",
  },
  {
    src: "https://demos.codezeel.com/wordpress/WCM06/WCM060133/wp-content/uploads/2024/04/cat-8-1.jpg",
    title: "PlayStation",
  },
  {
    src: "https://demos.codezeel.com/wordpress/WCM06/WCM060133/wp-content/uploads/2024/04/cat-2-1.jpg",
    title: "T-Shirt",
  },
  {
    src: "https://demos.codezeel.com/wordpress/WCM06/WCM060133/wp-content/uploads/2024/04/cat-6-1.jpg",
    title: "Shoes",
  },
  {
    src: "https://demos.codezeel.com/wordpress/WCM06/WCM060133/wp-content/uploads/2024/04/cat-7-1.jpg",
    title: "Bag",
  },
  {
    src: "https://demos.codezeel.com/wordpress/WCM06/WCM060133/wp-content/uploads/2024/04/cat-1-1.jpg",
    title: "Tab",
  },
  {
    src: "https://demos.codezeel.com/wordpress/WCM06/WCM060133/wp-content/uploads/2024/04/cat-4-1.jpg",
    title: "Braclet",
  },
  {
    src: "https://demos.codezeel.com/wordpress/WCM06/WCM060133/wp-content/uploads/2024/01/02-31-460x460.jpg",
    title: "Watch",
  },
  {
    src: "https://demos.codezeel.com/wordpress/WCM06/WCM060133/wp-content/uploads/2024/01/01-13-768x768.jpg",
    title: "Laptop",
  },
];

function HomeCatSlider() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="relative w-full py-6 px-8">
      <div className="home-slider-prev w-11 h-11 bg-white border-2 border-gray-400 hover:bg-red-500 rounded-[50%] flex justify-center items-center absolute z-10 top-[40%] left-3 cursor-pointer">
        <button ref={prevRef} className="cursor-pointer">
          <span
            className="
              cursor-pointer
              m-2!
            size-3!
            material-symbols-outlined"
          >
            arrow_back_ios
          </span>
        </button>
      </div>
      <div className="home-slider-next w-11 h-11 bg-white border-2 border-gray-400 hover:bg-red-500 rounded-[50%] flex justify-center items-center absolute z-10 top-[40%] right-12 cursor-pointer">
        <button ref={nextRef} className="cursor-pointer">
          <span
            className="
              cursor-pointer
              m-2!
            size-3!
            material-symbols-outlined"
          >
            arrow_forward_ios
          </span>
        </button>
      </div>
      <Swiper
        className=" mt-8"
        modules={[Navigation, Autoplay]}
        slidesPerView={7}
        spaceBetween={16}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        navigation
      >
        {Slide.map((Slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="bg-white border w-40 h-40 rounded-full shadow-sm
                            hover:shadow-md transition flex flex-col items-center
                            justify-center gap-2 border-gray-600 "
            >
              <img
                src={Slide.src}
                alt={Slide.title}
                className="w-30 h-30 object-contain rounded-full  hover:scale-130"
              />
            </div>
            <h5 className="text-center font-bold text-2xl  text-gray-800 pb-1">
              {Slide.title}
            </h5>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default HomeCatSlider;
