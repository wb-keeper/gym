"use client";
import "swiper/css";
import "swiper/css/navigation";
import { SwiperSlide, Swiper } from "swiper/react";
const HeroSlider = () => {
  return (
    <Swiper>
      <SwiperSlide className="h-full flex justify-end pt-48">
        <div>
          <h1 className="h1">
            <span>Where hard</span> work meets success
          </h1>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroSlider;
