'use client';

import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const SwiperComponent = ({ data }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={10}
      slidesPerView={1}
      autoplay
      navigation
      pagination={{ clickable: true }}      
    >
      {data.map(({ id, title, image }) => (
        <SwiperSlide key={id}>
          <Image width={900} height={600} src={image} priority alt={title} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperComponent;
