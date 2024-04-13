"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

import Description from "@/components/portfolio/Description";

const PortfolioSlider = ({ images }: { images: any }) => {
  const [activeImage, setActiveImage] = useState(0);

  const clickNext = useCallback(() => {
    activeImage === images.length - 1
      ? setActiveImage(0)
      : setActiveImage(activeImage + 1);
  }, [activeImage, images.length]);

  const clickPrev = () => {
    activeImage === 0
      ? setActiveImage(images.length - 1)
      : setActiveImage(activeImage - 1);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      clickNext();
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [activeImage, clickNext]);

  return (
    <div className="flex justify-center items-center p-0 mx-auto w-full max-w-[1200px] h-[200px] md:h-[300px] xl:h-[550px] rounded-3xl bg-black/50">
      <div className="relative w-full h-full max-sm:rounded-2xl md:rounded-tl-2xl rounded-bl-2xl overflow-hidden bg-black/50">
        {images.map((elem: any, idx: number) => (
          <div
            key={idx}
            className={`${"block w-full h-full"} ${
              idx !== activeImage ? "hidden" : ""
            }`}
          >
            <Image
              priority
              src={elem.imageURL}
              alt={elem.title}
              width={500}
              height={500}
              className="block w-full h-full object-contain rounded-tl-3xl rounded-bl-3xl"
            />
            <ul className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex justify-center items-center gap-5 w-[80px] h-[40px]">
              <li
                className="flex justify-center items-center text-white cursor-pointer p-4 rounded-tl-2xl rounded-bl-2xl bg-black/75 transition-opacity hover:bg-black/50"
                onClick={clickPrev}
              >
                <FaArrowLeftLong />
              </li>
              <li
                className="flex justify-center items-center text-white cursor-pointer p-4 rounded-tr-2xl rounded-br-2xl bg-black/75 transition-opacity hover:bg-black/50"
                onClick={clickNext}
              >
                <FaArrowRightLong />
              </li>
            </ul>
          </div>
        ))}
      </div>
      <Description images={images} activeImage={activeImage} />
    </div>
  );
};

export default PortfolioSlider;
