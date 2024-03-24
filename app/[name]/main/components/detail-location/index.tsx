import Div from "@/app/[name]/components/div";
import Background from "@/app/[name]/components/background";
import BottomDecor from "@/app/[name]/components/bottom-decor";
import Scaffold from "@/app/[name]/components/scaffold";
import TopDecor from "@/app/[name]/components/top-decor";
import { kText } from "@/app/[name]/hooks/text";

export default function DetailLocation() {
  return (
    <Scaffold className=" whitespace-pre-line text-center">
      <TopDecor />
      <Background className="-z-50" />

      <Div className="animate-fade-zoom">
        <Detail
          title={kText.acaraAkad}
          desc={`${kText.hariAcaraAkad}\n${kText.pukul} ${kText.waktuAcaraAkad}`}
        />
        <Detail
          title={kText.acaraResepsi}
          desc={`${kText.hariAcaraResepsi}\n${kText.pukul} ${kText.waktuAcaraResepsi}`}
        />
      </Div>
      <BottomDecor />
    </Scaffold>
  );
}

const Detail = (props: { title: string; desc: string }) => {
  return (
    <>
      <Div className="font-semibold text-base">{props.title}</Div>
      <Div>{props.desc}</Div>
    </>
  );
};
