import Image from "next/image";
import { useState, useEffect, ReactNode } from "react";
import Div from "./div";

export default function Carousel<T>({
  imageList,
  renderItem,
}: {
  imageList: T[];
  renderItem: (val: T) => ReactNode;
}) {
  const [indexImage, setIndexImage] = useState(1);
  const selectedImage = indexImage % imageList.length;
  let nextImage = selectedImage + 1;

  if (nextImage === imageList.length) {
    nextImage = 0;
  }

  useEffect(() => {
    console.log(`initializing interval`);
    const interval = setInterval(() => {
      setIndexImage((prev) => prev + 1);
    }, 5000);

    return () => {
      console.log(`clearing interval`);
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div
        key={indexImage}
        className="animate-fade-zoom-out absolute top-0 z-10 object-cover h-[450px]"
      >
        {renderItem(imageList[selectedImage])}
      </div>
      <div className="scale-[1.18] absolute z-0 top-0 object-cover h-[450px]">
        {renderItem(imageList[nextImage])}
      </div>
    </>
  );
}
