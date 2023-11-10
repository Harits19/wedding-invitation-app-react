import useToQuery from "@/app/hooks/useToQuery";
import Location from "../location";
import DetailLocation from "../detail-location";
import Attendance from "../attendance";
import Greeting from "../greeting";

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
      <Greeting />
    </div>
  );
}
