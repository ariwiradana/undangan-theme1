import Image from "next/image";
import React, { FC, ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

const Container: FC<ContainerProps> = ({ children }) => {
  return (
    <div className="flex justify-end">
      <div className="w-full bg-no-repeat bg-cover bg-center h-screen fixed z-0 items-end hidden lg:flex">
        <div className="w-full h-1/4 bg-gradient-to-r from-black to-transparent mb-16 max-w-[50%] z-10"></div>
        <div className="fixed inset-0 bg-black bg-opacity-40 z-10"></div>
        <Image
          src="https://source.unsplash.com/7XqL_DVuBMw/1920x1080"
          alt="hero"
          fill
          className="object-cover"
        />
      </div>
      {children}
    </div>
  );
};

export default Container;
