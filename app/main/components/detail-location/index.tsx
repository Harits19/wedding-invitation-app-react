import TextDiv from "@/app/components/div";
import Background from "@/app/components/background";
import BottomDecor from "@/app/components/bottom-decor";
import Scaffold from "@/app/components/scaffold";
import TopDecor from "@/app/components/top-decor";
import { kText } from "@/constans/text";

export default function DetailLocation() {
  return (
    <Scaffold className=" whitespace-pre-line text-center">
      <TopDecor />
      <Background className="-z-50" />

      <Detail
        title={kText.acaraAkad}
        desc={`${kText.hariAcaraAkad}\n${kText.pukul} ${kText.waktuAcaraAkad}`}
      />
      <Detail
        title={kText.acaraResepsi}
        desc={`${kText.hariAcaraResepsi}\n${kText.pukul} ${kText.waktuAcaraResepsi}`}
      />

      <BottomDecor />
    </Scaffold>
  );
}

const Detail = (props: { title: string; desc: string }) => {
  return (
    <>
      <TextDiv className="font-semibold text-base">{props.title}</TextDiv>
      <TextDiv>{props.desc}</TextDiv>
    </>
  );
};
