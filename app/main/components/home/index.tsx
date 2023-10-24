import Text from "@/app/components/averia";
import Background from "@/app/components/background";
import HalfRoundBox from "@/app/components/half-round-box";
import MenuWrapper from "@/app/components/menu-wrapper";
import Scaffold from "@/app/components/scaffold";
import { kPublic } from "@/constans/public";
import { kSize } from "@/constans/size";
import { kText } from "@/constans/text";
import Image from "next/image";
import { ReactNode } from "react";

export default function Home() {
  const Desc = (props: { children: ReactNode }) => {
    return (
      <Text className="text-[13px] animate-fade-zoom">{props.children}</Text>
    );
  };
  const { width, height } = kSize.max.window;

  return (
    <Scaffold>
      <div className="h-[15vh]" />
      <Background className="-z-20" />
      <HalfRoundBox
        aboveBox={
          <div className="items-center flex flex-col p-12 text-center">
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
              className="rounded-full object-cover w-[205px] h-[205px] animate-fade-zoom"
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
        }
      />{" "}
    </Scaffold>
  );
}
