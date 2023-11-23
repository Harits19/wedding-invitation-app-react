import Div from "@/app/components/div";
import Input from "@/app/components/input";
import Scaffold from "@/app/components/scaffold";
import Select from "@/app/components/select";
import TextArea from "@/app/components/textarea";
import useToQuery from "@/app/hooks/useToQuery";
import { kText } from "@/constans/text";

export default function Attendance() {
  const name = useToQuery();
  return (
    <Scaffold className="text-center px-8">
      <div className="h-16" />
      <Div family="berkshire" className="text-3xl">
        {kText.kehadiran}
      </Div>
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
      <div className="h-3" />
      <div className="flex flex-row">
        <button className="bg-driftwood w-fit px-7 py-2 rounded-md">
          <Div className="text-white">{kText.kirim}</Div>
        </button>
      </div>
      <div className="h-24" />
    </Scaffold>
  );
}
