import Div from "@/app/[name]/components/div";
import Background from "@/app/[name]/components/background";
import BottomDecor from "@/app/[name]/components/bottom-decor";
import HalfRoundBox from "@/app/[name]/components/half-round-box";
import Scaffold from "@/app/[name]/components/scaffold";
import { kText } from "@/app/[name]/constans/text";
import Image from "next/image";
import { ReactNode } from "react";
import { useInvitationDetailProvider } from "@/app/[name]/hooks/use-invitation-detail";
import { concatBaseUrl } from "@/app/[name]/utils/string-util";

export default function Home() {
  const { data } = useInvitationDetailProvider()
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
            src={concatBaseUrl(data?.photo?.cover)}
            width={205}
            height={205}
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
