"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

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
      <SwiperSlide>
        <Image
          priority
          src={"/images/banner_1.jpg"}
          alt="Slider Image 1"
          width={1920}
          height={1080}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          priority
          src={"/images/banner_2.jpg"}
          alt="Slider Image 2"
          width={1920}
          height={1080}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          priority
          src={"/images/banner_3.jpg"}
          alt="Slider Image 3"
          width={1920}
          height={1080}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          priority
          src={"/images/banner_4.jpg"}
          alt="Slider Image 4"
          width={1920}
          height={1080}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          priority
          src={"/images/banner_5.jpg"}
          alt="Slider Image 5"
          width={1920}
          height={1080}
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
