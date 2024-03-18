import Image from "next/image";
import React, { FC, ReactNode } from "react";

interface ContainerProps {
  image: string;
}

const Container: FC<ContainerProps> = (props) => {
  return (
    <div className="lg:flex hidden justify-end lg:w-[calc(100%-33%)] fixed">
      <div
        className={`w-full h-screen bg-no-repeat bg-cover bg-center z-0 items-end hidden lg:flex bg-hero-image`}
      >
        <div className="w-full h-1/4 bg-gradient-to-r from-black to-transparent mb-16 max-w-[50%] z-10"></div>
        <div className="fixed inset-0 bg-black bg-opacity-40 z-[1]"></div>
      </div>
    </div>
  );
};

export default Container;
