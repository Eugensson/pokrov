"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

import { bannerImages } from "@/constants";

import { Autoplay } from "swiper/modules";

const Slider = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 5000 }}
      speed={500}
      spaceBetween={10}
      slidesPerView={1}
      className="h-auto w-full"
    >
      {bannerImages.map(({ imageURL }, index) => (
        <SwiperSlide key={index}>
          <Image
            priority
            src={imageURL}
            alt="Світлина Храму"
            width={1920}
            height={1080}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
