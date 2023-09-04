'use client';

import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const SwiperComponent = ({ spaceBetween, slidesPerView, data, width, height }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      autoplay
      navigation
      pagination={{ clablicke: true }}      
    >
      {data.map(({ id, title, image }) => (
        <SwiperSlide key={id}>
          <Image width={width} height={height} src={image} priority alt={title} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperComponent;
