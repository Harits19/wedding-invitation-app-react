import Div from "@/app/components/div";
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
        <Div
          family="berkshire"
          className="text-3xl animate-top-bottom-fade"
        >
          {kText.saveTheDate}
        </Div>
        <br />
        <div className="h-11" />
        <Div family="averia" className="text-base">
          {kText.theWedding}
        </Div>
        <Div family="averia" className="text-2xl animate-bottom-top">
          <DateText />
        </Div>
        <div className="h-1" />
        <Div family="averia" className="text-base animate-bottom-top">
          {kText.pukul} {kText.waktuPernikahan}
        </Div>
        <div className="h-1" />
        <Div family="averia" className="text-sm animate-bottom-top">
          {kText.venue}
        </Div>
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
        <Div className="animate-bottom-top">
          {kText.merupakanSuatuKehormatan}
          {kText.memberikanDoaRestu}
        </Div>
      </div>
      <BottomDecor />
    </Scaffold>
  );
}
