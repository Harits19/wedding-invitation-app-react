"use client";

import Image from "next/image";
import Background from "../components/background";
import BottomDecor from "../components/bottom-decor";
import Scaffold from "../components/scaffold";
import TopDecor from "../components/top-decor";
import { kPublic } from "@/constans/public";
import { useEffect, useState } from "react";

const useTimeout = () => {};

export default function Main() {
  const [indexImage, setIndexImage] = useState(1);
  const imageList = [kPublic.photoSlideShow1, kPublic.photoSlideShow2];
  const selectedImage = indexImage % imageList.length;
  const nextImage = selectedImage + 1;

  return (
    <Scaffold>
      <Background />
      <div className="absolute z-10 right-0 left-0">
        <TopDecor />
      </div>
      <Image
        // className="animate-fade-zoom-out absolute"
        alt="photo"
        src={imageList[selectedImage]}
      />
      <Image
        // className="animate-fade-zoom-out absolute"
        alt="photo"
        src={imageList[nextImage == imageList.length ? 0 : nextImage]}
      />
      <button
        className="z-50"
        onClick={() => {
          setIndexImage((prev) => prev + 1);
        }}
      >
        Next Image
      </button>
      <div className="flex flex-1" />
      <BottomDecor />
    </Scaffold>
  );
}
