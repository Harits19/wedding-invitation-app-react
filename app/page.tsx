"use client";

import { kSize } from "@/constans/size";
import SideBtn from "./components/side-btn";
import SideTop from "./components/side-top";
import { kFontFamily } from "@/constans/text";
import Text from "./components/averia";
import Image from "next/image";

export default function Home() {
  const { width, height } = kSize.max.window;

  const Footer = () => {
    return (
      <div className="flex flex-row justify-between">
        <SideTop side="left" />
        <SideTop />
      </div>
    );
  };

  const Body = () => {
    return (
      <>
        <Text family="averia" className="text-xl text-303333">
          The Wedding
        </Text>
        <div className="h-6" />
        <Image
          className="rounded-full w-[216px] h-[216px] bg-303333"
          src="https://indoinvite.com/nikah/upload/160877/1695397326foto_berdua.jpg"
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
          <Text family="averia" className="text-white">Buka Undangan</Text>
        </button>
      </>
    );
  };

  const TopDecor = () => {
    return (
      <div className="flex flex-row justify-between">
        <SideBtn side="left" />
        <SideBtn />
      </div>
    );
  };

  return (
    <main className="flex flex-row justify-center">
      <div
        className={`flex flex-col h-[100vh] w-[100vw] overflow-hidden`}
        style={{
          maxHeight: height,
          maxWidth: width,
          background: `url(/background-picture-1.jpeg)`,
        }}
      >
        <TopDecor />
        <div className="flex flex-1 flex-col relative items-center pt-8">
          <div
            className=" absolute z-30 top-0 bottom-0 rounded-t-full w-[400px] self-center"
            style={{
              boxShadow: "0px -10px 9px rgba(0, 0, 0, 0.2)",
            }}
          />
          <div className="absolute bottom-0 right-0 left-0">
            <Footer />
          </div>
          <Body />
        </div>
      </div>
    </main>
  );
}
