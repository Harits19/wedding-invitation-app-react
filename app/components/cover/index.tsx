import { kText } from "@/app/constans/text";
import Div from "../div";
import Image from "next/image";
import { kPublic } from "@/app/constans/public";
import Scaffold from "../scaffold";
import Background from "../background";
import TopDecor from "../top-decor";
import HalfRoundBox from "../half-round-box";
import BottomDecor from "../bottom-decor";
import useToQuery from "@/app/hooks/use-to-query";
import { ReactNode, useState } from "react";

export default function Cover(props: { children: ReactNode }) {
  const to = useToQuery();
  const [showCover, setShowCover] = useState(true);
  if (!showCover) {
    return props.children;
  }
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
            console.log("bukaUndangan");
            setShowCover(false);
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
