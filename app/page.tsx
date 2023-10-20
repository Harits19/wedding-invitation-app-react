"use client";

import { kSize } from "@/constans/size";
import SideTopDecor from "./components/side-decor/side-top-decor";
import SideBottomDecor from "./components/side-decor/side-bottom-decor";
import Text from "./components/averia";
import Image from "next/image";
import Wiggle from "./components/wiggle";
import { kPublic } from "@/constans/public";

export default function Home() {
  const { width, height } = kSize.max.window;

  const BottomDecor = () => {
    return (
      <div className="flex flex-row justify-between">
        <SideBottomDecor side="left" />
        <SideBottomDecor />
      </div>
    );
  };

  const Body = () => {
    return (
      <div className="flex flex-col items-center">
        <Text family="averia" className="text-xl text-303333">
          The Wedding
        </Text>
        <div className="h-6" />
        <Image
          className="rounded-full w-[216px] h-[216px] bg-303333"
          src={kPublic.photoCover}
          alt="image"
          width={216}
          height={216}
        />
        <br />
        <Text className="text-3xl text-303333" family="berkshire">
          Mirza & Yunny
        </Text>
        <br />
        <Text>Kepada</Text>
        <div className="h-2" />
        <Text>Harits</Text>
        <div className="h-2" />
        <button className="bg-ae814c py-2 px-12 rounded-sm">
          <Text family="averia" className="text-white">
            Buka Undangan
          </Text>
        </button>
      </div>
    );
  };

  const TopDecor = () => {
    return (
      <div className="flex flex-row justify-between">
        <SideTopDecor side="left" />
        <SideTopDecor />
      </div>
    );
  };

  const Background = ({ className }: { className?: string }) => {
    return (
      <Image
        className={`absolute top-0 left-0 right-0 bottom-0 w-full h-full ${className} object-cover`}
        src={kPublic.background1}
        alt="asd"
      />
    );
  };

  return (
    <main className="flex flex-row justify-center">
      <div
        className={`flex flex-col h-[100vh] w-[100vw] overflow-hidden relative`}
        style={{
          maxHeight: height,
          maxWidth: width,
        }}
      >
        {/* Top */}
        <Background className="-scale-y-100 -scale-x-100 " />
        <TopDecor />

        <div className="flex flex-1 flex-col relative items-center pt-8">
          <div
            className=" absolute z-0 top-0 bottom-0 rounded-t-full w-[400px] self-center overflow-hidden"
            style={{
              boxShadow: "0px -10px 9px rgba(0, 0, 0, 0.2)",
            }}
          >
            <Background className="" />
          </div>
          <div className="absolute z-20 bottom-0 right-0 left-0">
            <BottomDecor />
          </div>
          <div className="absolute z-40">
            <Body />
          </div>
        </div>
      </div>
    </main>
  );
}
