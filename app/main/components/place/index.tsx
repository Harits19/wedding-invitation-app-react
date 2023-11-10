import useToQuery from "@/app/hooks/useToQuery";
import Location from "../location";
import DetailLocation from "../detail-location";
import Attendance from "../attendance";
import { kText } from "@/constans/text";
import Greeting from "../greeting";
import Scaffold from "@/app/components/scaffold";
import TextDiv from "@/app/components/averia";
import Input from "@/app/components/input";
import TextArea from "@/app/components/textarea";
import Select from "@/app/components/select";

export default function Place() {
  const name = useToQuery();
  return (
    <div>
      <Location />
      <DetailLocation />
      <div className="w-screen flex flex-row justify-center">
        <div className=" self-center h-16 overflow-y-hidden -mt-16 w-full shadow-2xl  max-w-360  " />
      </div>
      <Attendance />

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
      <Greeting />
    </div>
  );
}
