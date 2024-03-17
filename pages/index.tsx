import Container from "@/components/element/container";
import Cover from "@/components/cover";
import React, { useEffect, useState } from "react";
import CoverOutside from "@/components/cover.outside";

const images: string[] = ["rGHO4XSF0Qk", "LlyIkGgfwIM", "EHAn0csi6-E"];

const Home = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [zIndex, setZIndex] = useState<number>(100);

  useEffect(() => {
    if (!open) {
      document.body.style.overflow = "hidden";
      setZIndex(100);
    } else {
      document.body.style.overflow = "visible";
      const timer = setTimeout(() => setZIndex(-1), 200);
      return () => clearTimeout(timer);
    }
    return () => {
      document.body.style.overflow = "visible";
    };
  }, [open]);

  return (
    <Container>
      <div className="lg:w-1/3 w-full z-10 relative">
        <div
          className="fixed top-0 transition-all ease-in-out duration-700"
          style={{ zIndex, opacity: open ? 0 : 1 }}
        >
          <CoverOutside setOpen={setOpen} image="rGHO4XSF0Qk" />
        </div>
        <Cover
          images={images}
          name="Ari & Juli"
          date="10 September 2024"
          place="Payangan, Gianyar"
        />
        <div className="h-[300rem] bg-yellow-500 w-full"></div>
        <div className="h-[300rem] bg-red-500 w-full"></div>
        <div className="h-[300rem] bg-green-500 w-full"></div>
      </div>
    </Container>
  );
};

export default Home;
