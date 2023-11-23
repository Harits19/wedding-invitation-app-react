"use client";

import { kSize } from "@/constans/size";
import SideTopDecor from "./components/side-decor/side-top-decor";
import SideBottomDecor from "./components/side-decor/side-bottom-decor";
import Div from "./components/div";
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
import HalfRoundBox from "./components/half-round-box";

export default function Cover() {
  const router = useRouter();
  const to = useToQuery();

  const Body = () => {
    return (
      <div className="flex flex-col items-center">
        <Div family="averia" className="text-xl text-303333">
          {kText.theWedding}
        </Div>
        <div className="h-6" />
        <Image
          className="rounded-full w-[216px] h-[216px] bg-303333"
          src={kPublic.photoCover}
          alt="image"
          width={216}
          height={216}
        />
        <br />
        <Div className="text-3xl text-303333" family="berkshire">
          {kText.name}
        </Div>
        <br />
        <Div>{kText.kepada}</Div>
        <div className="h-2" />
        <Div>{to}</Div>
        <div className="h-2" />
        <button
          onClick={() => {
            router.push(`main?to=${to}`);
          }}
          className="bg-driftwood py-2 px-12 rounded-sm"
        >
          <Div family="averia" className="text-white">
            {kText.bukaUndangan}
          </Div>
        </button>
      </div>
    );
  };

  return (
    <Scaffold>
      <div className="flex flex-col min-h-screen">
        <Background className="-scale-y-100 -scale-x-100 z-0" />
        <TopDecor />

        <HalfRoundBox
          insideBox={<Background className="" />}
          aboveBox={
            <>
              <div className="absolute z-20 bottom-0 right-0 left-0">
                <BottomDecor />
              </div>
              <div className="absolute z-40">
                <Body />
              </div>
            </>
          }
        />
      </div>
    </Scaffold>
  );
}
