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
    <div className="h-screen w-full bg-gray-300 relative select-none">
      <Image
        src={`https://source.unsplash.com/${props.image}/480x720`}
        width="0"
        height="0"
        sizes="100vh"
        className="w-full h-screen object-cover"
        alt="cover-image"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 z-10 flex justify-center items-center flex-col p-6">
        <h3 className="font-nunito text-white font-normal text-3xl font-alegreya mb-8">
          {props.name}
        </h3>
        <p className="text-white font-normal text-xs text-center leading-6 font-montserrat">
          Kepada. Bpk/Ibu/Saudara/i
          <br />
          Tanpa mengurangi rasa hormat, kami mengundang anda untuk hadir pada
          acara pernikahan kami.
        </p>
        <div className="mt-8">
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
