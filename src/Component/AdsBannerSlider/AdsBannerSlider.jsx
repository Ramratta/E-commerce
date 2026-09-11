import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

import Banner1 from "../Image/Banner1.avif";
import Banner2 from "../Image/Banner2.avif";
import Banner3 from "../Image/Banner3.avif";
import Banner4 from "../Image/Banner4.jpg";
import Banner5 from "../Image/Banner5.avif";
import Banner6 from "../Image/Banner6.avif";
import BannerBox from "./BannerBox";

const allBanners = [Banner1, Banner2, Banner3, Banner4, Banner5, Banner6];

function AdsBannerSlider({ item, shownavigation = true, bannerCount }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const banners = bannerCount ? allBanners.slice(0, bannerCount) : allBanners;

  return (
    <div className=" relative px-5 py-16 w-full">
      {shownavigation && (
        <>
          <button
            ref={prevRef}
            className="absolute left-8 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 hover:bg-red-500"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            ref={nextRef}
            className="absolute right-8 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 hover:bg-red-500"
          >
            <ChevronRight size={20} />
          </button>
        </>
      )}
      <Swiper
        slidesPerView={item}
        spaceBetween={16}
        modules={shownavigation ? [Navigation] : []}
        navigation={
          shownavigation
            ? { prevEl: prevRef.current, nextEl: nextRef.current }
            : false
        }
        onBeforeInit={(swiper) => {
          if (shownavigation) {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }
        }}
        className="w-full"
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={index}>
            <BannerBox Image={banner} link={"/"} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default AdsBannerSlider;
