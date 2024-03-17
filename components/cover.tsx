import Image from "next/image";
import React, { FC } from "react";
import { EffectFade, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Button from "./element/button";
import { FaEnvelopeOpenText } from "react-icons/fa";
import { CiSaveDown2 } from "react-icons/ci";

interface CoverProps {
  images: string[];
  name: string;
  place: string;
  date: string;
}

const Cover: FC<CoverProps> = (props) => {
  return (
    <div className="h-screen w-full bg-gray-300 relative select-none">
      <Swiper
        zoom={{ toggle: true }}
        loop
        speed={3000}
        autoplay
        slidesPerView={1}
        modules={[EffectFade, Autoplay]}
        effect="fade"
      >
        {props.images.map((image) => (
          <SwiperSlide key={`cover-image-${image}`}>
            <Image
              src={`/images/${image}.jpg`}
              width="0"
              height="0"
              sizes="100vh"
              className="w-full h-screen object-cover"
              alt={`cover-image-${image}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/[.8] z-10 flex justify-end items-center flex-col p-6">
        <p className="text-white font-light text-xs lg:text-sm text-center leading-6 font-montserrat">
          The Wedding of
        </p>
        <h3 className="font-nunito text-white font-normal text-3xl font-alegreya mb-4 text-center">
          {props.name}
        </h3>
        <p className="text-white font-light text-xs text-center leading-6 font-montserrat uppercase">
          {props.place} | {props.date}
        </p>
        <button>
          <CiSaveDown2
            className="text-white mt-6 mb-16 animate-bounce"
            size={24}
          />
        </button>
      </div>
    </div>
  );
};

export default Cover;
