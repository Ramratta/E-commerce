import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import Productitem from "./Productitem";

function Products(props) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className=" relative w-full">
      <button
        ref={prevRef}
        className="absolute left-2 top-[45%] -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 hover:bg-red-500"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        ref={nextRef}
        className="absolute right-2 top-[45%] -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 hover:bg-red-500"
      >
        <ChevronRight size={20} />
      </button>

      <Swiper
        modules={[Navigation]}
        slidesPerView={props.items}
        spaceBetween={10}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        className="w-full"
      >
        {props.products?.map((product, index) => (
          <SwiperSlide key={index}>
            <Productitem product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Products;
