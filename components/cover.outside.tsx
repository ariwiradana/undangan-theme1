import Image from "next/image";
import React, { FC } from "react";
import Button from "./element/button";
import { FaEnvelopeOpenText } from "react-icons/fa";

interface CoverOutsideProps {
  image: string;
  name: string;
  setOpen(value: boolean): void;
}
const CoverOutside: FC<CoverOutsideProps> = (props) => {
  return (
    <div className="h-dvh w-full bg-gray-300 relative select-none">
      <Image
        src={`/images/${props.image}.jpg`}
        width="0"
        height="0"
        sizes="100vh"
        className="w-full h-dvh object-cover"
        alt="cover-image"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/[.8] z-10 flex justify-end items-center flex-col p-6">
        <h3 className="font-nunito text-white font-normal text-3xl font-alegreya mb-8 text-center">
          {props.name}
        </h3>
        <p className="text-white font-normal text-xs text-center leading-6 font-montserrat">
          Kepada. Bpk/Ibu/Saudara/i
          <br />
          Tanpa mengurangi rasa hormat, kami mengundang anda untuk hadir pada
          acara pernikahan kami.
        </p>
        <div className="mt-8 mb-16">
          <Button
            onClick={() => props.setOpen(true)}
            title="Buka Undangan"
            icon={<FaEnvelopeOpenText size={14} />}
          />
        </div>
      </div>
    </div>
  );
};

export default CoverOutside;
