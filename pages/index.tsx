import Container from "@/components/element/container";
import Cover from "@/components/cover";
import React, { useEffect, useState } from "react";
import CoverOutside from "@/components/cover.outside";
import useCover from "@/hooks/useCover";
import Head from "next/head";

const images: string[] = ["rGHO4XSF0Qk", "LlyIkGgfwIM", "EHAn0csi6-E"];

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
      <Container>
        <div className="lg:w-1/3 w-full z-10 relative">
          <div
            className="fixed top-0 transition-all ease-in-out duration-700"
            style={{ zIndex, opacity: open ? 0 : 1 }}
          >
            <CoverOutside name={name} setOpen={setOpen} image="rGHO4XSF0Qk" />
          </div>
          <Cover images={images} name={name} date={date} place={place} />
          <div className="h-screen bg-yellow-500 w-full"></div>
          <div className="h-screen bg-red-500 w-full"></div>
          <div className="h-screen bg-green-500 w-full"></div>
        </div>
      </Container>
    </>
  );
};

export default Home;
