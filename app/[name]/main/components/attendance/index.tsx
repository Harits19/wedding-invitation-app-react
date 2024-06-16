import Div from "@/app/[name]/components/div";
import Scaffold from "@/app/[name]/components/scaffold";
import Select from "@/app/[name]/components/select";
import TextArea from "@/app/[name]/components/textarea";
import useToQuery from "@/app/[name]/hooks/use-to-query";
import { kText } from "@/app/constans/text";

export default function Attendance() {
  const name = useToQuery();
  return (
    <Scaffold className="text-center px-8">
      <div className="h-16" />
      <Div family="berkshire" className="text-3xl">
        {kText.kehadiran}
      </Div>
      <div className="h-2" />
      <input defaultValue={name} />
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
