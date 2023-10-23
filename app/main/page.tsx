"use client";

import Image from "next/image";
import Background from "../components/background";
import BottomDecor from "../components/bottom-decor";
import Scaffold from "../components/scaffold";
import TopDecor from "../components/top-decor";
import { kPublic } from "@/constans/public";
import { useEffect, useState } from "react";
import Text from "../components/averia";
import { kText } from "@/constans/text";
import moment from "moment";

const useTimeout = () => {};

export default function Main() {
  const [indexImage, setIndexImage] = useState(1);
  const imageList = [kPublic.photoSlideShow1, kPublic.photoSlideShow2];
  const selectedImage = indexImage % imageList.length;
  const nextImage = selectedImage + 1;

  return (
    <Scaffold>
      <Background className="z-10" />
      <div className="absolute z-20 right-0 left-0">
        <TopDecor />
      </div>
      <Image
        className="z-0 absolute h-[400px] w-full object-cover"
        alt="photo"
        height={450}
        src={imageList[0]}
      />
      <div className="absolute z-50 top-0 left-0 right-0 bottom-0 flex flex-col items-center">
        <Image
          className=" opacity-0 h-[400px] w-full object-cover"
          alt="photo"
          height={450}
          src={imageList[0]}
        />
        <Text className="text-2xl" family="berkshire">
          {kText.name}
        </Text>
        <Text className="text-base" family="averia">
          {moment(kText.date).format("dddd, DD MMMM YYYY")}
        </Text>
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
