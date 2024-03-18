import Container from "@/components/element/container";
import Cover from "@/components/cover";
import React, { useEffect, useState } from "react";
import CoverOutside from "@/components/cover.outside";
import useCover from "@/hooks/useCover";
import Head from "next/head";
import Person from "@/components/person";

const images: string[] = ["image (1)", "image (2)", "image (3)"];

const Home = () => {
  const { open, setOpen, zIndex } = useCover();
  const name: string = process.env.NEXT_PUBLIC_NAME || "";
  const date: string = process.env.NEXT_PUBLIC_DATE || "";
  const place: string = process.env.NEXT_PUBLIC_PLACE || "";

  return (
    <>
      <Head>
        <title>{name} | Undangan Pernikahan</title>
      </Head>
      <div className="relative">
        <Container image={images[3]} />
        <div className="flex lg:justify-end justify-center relative">
          <div className="lg:w-[33%] w-full">
            <div
              className="fixed top-0 transition-all ease-in-out duration-700"
              style={{ zIndex, opacity: open ? 0 : 1 }}
            >
              <CoverOutside name={name} setOpen={setOpen} image={images[0]} />
            </div>
            <Cover images={images} name={name} date={date} place={place} />
            <Person />
            <div className="h-screen bg-yellow-500 w-full"></div>
            <div className="h-screen bg-red-500 w-full"></div>
            <div className="h-screen bg-green-500 w-full"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
