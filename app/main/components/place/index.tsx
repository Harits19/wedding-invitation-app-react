import Location from "../location";
import DetailLocation from "../detail-location";
import Attendance from "../attendance";
import Greeting from "../greeting";

export default function Place() {
  return (
    <div>
      <Location />
      <DetailLocation />

      <Attendance />
      <Greeting />
    </div>
  );
}
