import { useEffect, useState } from "react";

const useCover = () => {
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
  return { setOpen, setZIndex, open, zIndex };
};

export default useCover;
