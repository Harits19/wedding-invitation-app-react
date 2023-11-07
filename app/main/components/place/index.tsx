import Text from "@/app/components/averia";
import Background from "@/app/components/background";
import BottomDecor from "@/app/components/bottom-decor";
import CountDown from "@/app/components/count-down";
import DateText from "@/app/components/date-text";
import Scaffold from "@/app/components/scaffold";
import TopDecor from "@/app/components/top-decor";
import { kText } from "@/constans/text";

export default function Place() {
  return (
    <div>
      <Scaffold className="">
        <TopDecor />
        <Background className="-scale-y-100 -z-50" />
        <Background className="-scale-y-100 -z-50" />
        <div className="flex flex-col items-center justify-center text-center  left-0 right-0 px-10">
          <Text family="berkshire" className="text-3xl">
            {kText.saveTheDate}
          </Text>
          <br />
          <div className="h-11" />
          <Text family="averia" className="text-base">
            {kText.theWedding}
          </Text>
          <Text family="averia" className="text-2xl">
            <DateText />
          </Text>
          <div className="h-1" />
          <Text family="averia" className="text-base">
            {kText.pukul} {kText.waktuPernikahan}
          </Text>
          <div className="h-1" />
          <Text family="averia" className="text-sm">
            {kText.venue}
          </Text>
          <div className="h-4" />
          <button
            className="px-4 py-2 bg-ae814c text-white rounded-full"
            onClick={() => {
              window.open(kText.linkMaps, "_blank");
            }}
          >
            {kText.mapLokasiAcara}
          </button>
          <br /> <br /> <br />
          <CountDown />
          <div className="h-4" />
          <Text>
            {kText.merupakanSuatuKehormatan}
            {kText.memberikanDoaRestu}
          </Text>
        </div>
        <BottomDecor />
      </Scaffold>
      <Scaffold className="">
        <TopDecor />
        <Background className="-z-50" />

        <div className="px-11 whitespace-pre-line text-center my-6">
          <Detail
            title={kText.acaraAkad}
            desc={`${kText.hariAcaraAkad}\n${kText.pukul} ${kText.waktuAcaraAkad}`}
          />
          <Detail
            title={kText.acaraResepsi}
            desc={`${kText.hariAcaraResepsi}\n${kText.pukul} ${kText.waktuAcaraResepsi}`}
          />
        </div>
        <BottomDecor />
      </Scaffold>
    </div>
  );
}

const Detail = (props: { title: string; desc: string }) => {
  return (
    <>
      <Text className="font-semibold text-base">{props.title}</Text>
      <Text>{props.desc}</Text>
    </>
  );
};
