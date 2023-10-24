"use client";

import { kSize } from "@/constans/size";
import SideTopDecor from "./components/side-decor/side-top-decor";
import SideBottomDecor from "./components/side-decor/side-bottom-decor";
import Text from "./components/averia";
import Image from "next/image";
import Wiggle from "./components/wiggle";
import { kPublic } from "@/constans/public";
import { useRouter, useSearchParams } from "next/navigation";
import Scaffold from "./components/scaffold";
import Background from "./components/background";
import TopDecor from "./components/top-decor";
import BottomDecor from "./components/bottom-decor";
import { kText } from "@/constans/text";
import useToQuery from "./hooks/useToQuery";

export default function Cover() {
  const router = useRouter();
  const to = useToQuery();

  const Body = () => {
    return (
      <div className="flex flex-col items-center">
        <Text family="averia" className="text-xl text-303333">
          {kText.coverTitle}
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
          {kText.name}
        </Text>
        <br />
        <Text>{kText.kepada}</Text>
        <div className="h-2" />
        <Text>{to}</Text>
        <div className="h-2" />
        <button
          onClick={() => {
            router.push(`main?to=${to}`);
          }}
          className="bg-ae814c py-2 px-12 rounded-sm"
        >
          <Text family="averia" className="text-white">
            {kText.bukaUndangan}
          </Text>
        </button>
      </div>
    );
  };

  return (
    <Scaffold>
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
    </Scaffold>
  );
}
