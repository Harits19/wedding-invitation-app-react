import Div from "@/app/components/div";
import Background from "@/app/components/background";
import BottomDecor from "@/app/components/bottom-decor";
import HalfRoundBox from "@/app/components/half-round-box";
import Scaffold from "@/app/components/scaffold";
import { kPublic } from "@/constans/public";
import { kText } from "@/constans/text";
import Image from "next/image";
import { ReactNode } from "react";

export default function Home() {
  const Desc = (props: { children: ReactNode }) => {
    return (
      <Div className="text-[13px] animate-fade-zoom">{props.children}</Div>
    );
  };

  return (
    <Scaffold>
      <div className="h-[15vh]" />
      <Background className="-z-20" />
      <HalfRoundBox
        insideBox={<Background className="-scale-y-100 h-max w-max" />}
      />
      <div className="items-center flex flex-col p-12 text-center z-50 ">
        <Div>السَّلاَمُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ</Div>
        <div className="h-6" />
        <Div family="berkshire" className="text-3xl">
          {kText.theWedding}
        </Div>
        <div className="h-10" />
        <Desc>
          <span>{kText.atasBerkahRahmat}</span>
          <span> {kText.kamiMengundang}</span>
        </Desc>
        <div className="h-4" />
        <Div>
          <Image
            className="rounded-full object-cover w-[205px] h-[205px] animate-fade-zoom"
            alt="alt"
            src={kPublic.photoCover}
          />
        </Div>
        <div className="h-4" />
        <Desc>
          {kText.ayat1} <br />
          {kText.ayat1Arti} <br />
          {kText.ayat1Surat}
        </Desc>
      </div>
      <div className="-mt-24">
        <BottomDecor />
      </div>
    </Scaffold>
  );
}
