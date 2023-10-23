"use client";

import Image, { StaticImageData } from "next/image";
import Background from "../components/background";
import BottomDecor from "../components/bottom-decor";
import Scaffold from "../components/scaffold";
import TopDecor from "../components/top-decor";
import { kPublic } from "@/constans/public";
import { useEffect, useState } from "react";
import Text from "../components/averia";
import { kText } from "@/constans/text";
import moment from "moment";
import AudioPlayer from "../components/audio-player";
import { Fade } from "react-slideshow-image";

const ImageSlideShow = (props: { src: StaticImageData }) => {
  useEffect(() => {
    console.log("image mounted ", props.src.src);

    return () => {
      console.log("image unmounted ", props.src.src);
    };
  }, [props.src.src]);
  return (
    <Image
      className="absolute top-0 w-full object-cover h-[400px]"
      alt="photo"
      src={props.src}
    />
  );
};

export default function Main() {
  const [indexImage, setIndexImage] = useState(1);
  const imageList = [kPublic.photoSlideShow1, kPublic.photoSlideShow2];
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
    <Scaffold>
      <Background className="z-20" />
      <div className="absolute z-20 right-0 left-0">
        <TopDecor />
      </div>

      <Image
        key={indexImage}
        className="animate-fade-zoom-out z-10 absolute top-0 w-full object-cover h-[400px]"
        alt="photo"
        src={imageList[selectedImage]}
      />
      <Image
        className="scale-[1.18] absolute top-0 w-full object-cover h-[400px]"
        alt="photo"
        src={imageList[nextImage]}
      />

      <div className="absolute z-50 top-0 left-0 right-0 bottom-0 flex flex-col items-center">
        <Image
          className=" opacity-0 h-[400px] object-cover"
          alt="photo"
          height={450}
          src={imageList[0]}
        />
        <button
          onClick={() => {
            setIndexImage(indexImage + 1);
          }}
        >
          Next
        </button>
        <Text className="text-2xl" family="berkshire">
          {kText.name}
        </Text>
        <Text className="text-base" family="averia">
          {moment(kText.date).format("dddd, DD MMMM YYYY")}
        </Text>

        <AudioPlayer src={"/background-music.mp4"} />

        <br />
        <div className="flex flex-row gap-x-2 animate-blip">
          {[1, 1, 1, 1].map((e, i) => (
            <Text
              family="poppins"
              className="h-[70px] bg-ae814c text-xl w-[70px] text-white rounded-lg items-center justify-center flex flex-col"
              key={i}
            >
              1<div className="text-xs">Hour</div>
            </Text>
          ))}
        </div>
      </div>

      <div className="z-20 absolute bottom-0 left-0 right-0">
        <BottomDecor />
      </div>
    </Scaffold>
  );
}
