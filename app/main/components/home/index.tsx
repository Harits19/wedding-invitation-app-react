import Text from "@/app/components/averia";
import Background from "@/app/components/background";
import HalfRoundBox from "@/app/components/half-round-box";
import MenuWrapper from "@/app/components/menu-wrapper";
import Scaffold from "@/app/components/scaffold";
import { kPublic } from "@/constans/public";
import { kText } from "@/constans/text";
import Image from "next/image";
import { ReactNode } from "react";

export default function Home() {
  const Desc = (props: { children: ReactNode }) => {
    return (
      <Text className="text-[13px] animate-fade-zoom">{props.children}</Text>
    );
  };
  return (
    <Scaffold>
      <Background />
      <div className="h-[15vh]" />
      <HalfRoundBox
        insideBox={
          <>
            <Background className="" />
            <div className="h-20" />
            <div className="items-center flex flex-col p-12 absolute z-auto text-center overflow-y-auto">
              <Text>السَّلاَمُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ</Text>
              <div className="h-6" />
              <Text family="berkshire" className="text-3xl">
                {kText.theWedding}
              </Text>
              <div className="h-10" />
              <Desc>
                <span>{kText.atasBerkahRahmat}</span>
                <span> {kText.kamiMengundang}</span>
              </Desc>
              <div className="h-4" />
              <Image
                className="rounded-full object-cover w-[205px] h-[205px] overflow-auto animate-fade-zoom"
                alt="alt"
                src={kPublic.photoCover}
              />
              <div className="h-4" />
              <Desc>
                {kText.ayat1}
                {kText.ayat1Arti}
                {kText.ayat1Surat}
              </Desc>
            </div>
          </>
        }
        aboveBox={<></>}
      />
    </Scaffold>
  );
}
