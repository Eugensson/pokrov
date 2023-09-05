'use client';

import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';

const SwiperComponent = ({ spaceBetween, slidesPerView, data, width, height }) => {
  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      autoplay
      navigation          
    >
      {data.map(({ id, title, image }) => (
        <SwiperSlide key={id}>
          <Image style={{objectFit: 'contain'}} width={width} height={height} src={image} priority alt={title} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperComponent;
