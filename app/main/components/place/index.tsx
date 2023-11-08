import TextDiv from "@/app/components/averia";
import Background from "@/app/components/background";
import BottomDecor from "@/app/components/bottom-decor";
import CountDown from "@/app/components/count-down";
import DateText from "@/app/components/date-text";
import Input from "@/app/components/input";
import InputDecoration from "@/app/components/input-decoration";
import Scaffold from "@/app/components/scaffold";
import Select from "@/app/components/select";
import TextArea from "@/app/components/textarea";
import TopDecor from "@/app/components/top-decor";
import useToQuery from "@/app/hooks/useToQuery";
import { kText } from "@/constans/text";

export default function Place() {
  const name = useToQuery();
  return (
    <div>
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
          <TextDiv>
            {kText.merupakanSuatuKehormatan}
            {kText.memberikanDoaRestu}
          </TextDiv>
        </div>
        <BottomDecor />
      </Scaffold>
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
      <div className="w-screen flex flex-row justify-center">
        <div className=" self-center h-16 overflow-y-hidden -mt-16 w-full shadow-2xl  max-w-360  " />
      </div>

      <Scaffold className="text-center px-8">
        <div className="h-16" />
        <TextDiv family="berkshire" className="text-3xl">
          {kText.kehadiran}
        </TextDiv>
        <div className="h-2" />
        <Input label={kText.nama} defaultValue={name} />
        <div className="h-4" />
        <TextArea label={kText.ucapan} rows={5} />
        <div className="h-4" />
        <Select value={"Hadir"}>
          {[kText.hadir, kText.tidakHadir].map((e) => (
            <option value={e} key={e} label={e}>
              {e}
            </option>
          ))}
        </Select>
        <div className="h-8" />
        <div className="flex flex-row">
          <button className="bg-ae814c w-fit px-7 py-2 rounded-md">
            <TextDiv className="text-white">{kText.kirim}</TextDiv>
          </button>
        </div>
        <div className="h-24" />
      </Scaffold>
    </div>
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
