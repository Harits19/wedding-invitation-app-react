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

      <Attendance />
      <Greeting />
    </div>
  );
}
