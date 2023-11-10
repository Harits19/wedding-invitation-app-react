import TextDiv from "@/app/components/averia";
import Background from "@/app/components/background";
import BottomDecor from "@/app/components/bottom-decor";
import CountDown from "@/app/components/count-down";
import DateText from "@/app/components/date-text";
import Scaffold from "@/app/components/scaffold";
import TopDecor from "@/app/components/top-decor";
import { kText } from "@/constans/text";

export default function Location() {
  return (
    <Scaffold className="">
      <TopDecor />
      <Background className="-scale-y-100 -z-50" />
      <Background className="-scale-y-100 -z-50" />
      <div className="flex flex-col items-center justify-center text-center  left-0 right-0 px-10">
        <TextDiv family="berkshire" className="text-3xl">
          {kText.saveTheDate}
        </TextDiv>
        <br />
        <div className="h-11" />
        <TextDiv family="averia" className="text-base">
          {kText.theWedding}
        </TextDiv>
        <TextDiv family="averia" className="text-2xl">
          <DateText />
        </TextDiv>
        <div className="h-1" />
        <TextDiv family="averia" className="text-base">
          {kText.pukul} {kText.waktuPernikahan}
        </TextDiv>
        <div className="h-1" />
        <TextDiv family="averia" className="text-sm">
          {kText.venue}
        </TextDiv>
        <div className="h-4" />
        <button
          className="px-4 py-2 bg-driftwood text-white rounded-full"
          onClick={() => {
            window.open(kText.linkMaps, "_blank");
          }}
        >
          {kText.mapLokasiAcara}
        </button>
        <br /> <br /> <br />
        <CountDown />
        <div className="h-4" />
        <TextDiv>
          {kText.merupakanSuatuKehormatan}
          {kText.memberikanDoaRestu}
        </TextDiv>
      </div>
      <BottomDecor />
    </Scaffold>
  );
}
