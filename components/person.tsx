import Image from "next/image";
import React, { FC } from "react";

const Person = () => {
  return (
    <div className="bg-dark px-8 py-16 flex flex-col justify-center items-center">
      <h2 className="text-primary uppercase font-mangolaine font-normal text-3xl mb-6">
        Om Swastiastu
      </h2>
      <p className="text-white font-montserrat text-xs lg:text-sm text-center font-light leading-6">
        Atas Asung Kertha Wara Nugraha Ida Sang Hyang Widhi Wasa/Tuhan Yang Maha
        Esa kami bermaksud mengundang Bapak/Ibu/Saudara/i pada Upacara Manusa
        Yadnya Pawiwahan (Pernikahan) kami.
      </p>
      <Identity
        childType="Putra Kedua"
        image="/images/image (1).jpg"
        name="I Made Ari Wiradana. S.Kom"
        father="I Wayan Darmayasa"
        mother="Ni Made Muliari"
        type="groom"
      />
      <Identity
        childType="Putri Pertama"
        image="/images/image (3).jpg"
        name="Ni Putu Juli Astuti. S.Kom"
        father="I Wayan Darmayasa"
        mother="Ni Made Muliari"
        type="bride"
      />
    </div>
  );
};

export default Person;

interface IdentityProps {
  type: "groom" | "bride";
  name: string;
  father: string;
  mother: string;
  image: string;
  childType: string;
}

const Identity: FC<IdentityProps> = (props) => {
  return (
    <div className="flex w-full items-center flex-col">
      <div className="mt-16 relative flex flex-col items-center justify-center bg-dark h-72 lg:h-96 w-48 lg:w-64">
        <div
          className="w-7 h-auto absolute top-4"
          style={{
            left: props.type === "groom" ? -36 : "auto",
            right: props.type === "bride" ? -33 : "auto",
          }}
        >
          <h3 className="text-white uppercase font-dream-avenue font-light text-4xl transform rotate-90 whitespace-nowrap">
            The {props.type}
          </h3>
        </div>
        <Image
          src={props.image}
          alt={props.type}
          width="0"
          height="0"
          sizes="100px"
          className="object-cover h-72 lg:h-96 w-48 lg:w-64 bg-gray-600"
        />
      </div>
      <h5 className="text-primary font-mangolaine text-2xl mt-6 mb-2">
        {props.name}
      </h5>
      <p className="text-white font-montserrat text-xs lg:text-sm text-center font-light leading-6">
        {props.childType} dari Pasangan
        <br />
        {props.father}
        <br />&<br />
        {props.mother}
      </p>
    </div>
  );
};
