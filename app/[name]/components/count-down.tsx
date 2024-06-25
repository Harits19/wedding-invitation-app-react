import { timeBetweenDates } from "@/app/[name]/utils/date-util";
import Div from "./div";
import { useEffect, useMemo, useState } from "react";
import { useInvitationDetailProvider } from "../hooks/use-invitation-detail";

export default function CountDown() {
  const { data } = useInvitationDetailProvider();

  const date = useMemo(() => {
    return new Date(Date.parse(data.date));
  }, [data.date]);
  const [diff, setDiff] = useState(timeBetweenDates(date));

  useEffect(() => {
    const interval = setInterval(() => {
      setDiff(timeBetweenDates(date));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [date]);

  return (
    <div className="flex flex-row gap-x-2 animate-blip">
      {Object.entries(diff).map((e, i) => (
        <Div
          family="poppins"
          className="h-[70px] bg-aDriftwood text-xl w-[70px] text-white rounded-lg items-center justify-center flex flex-col"
          key={i}
        >
          {e[1]}
          <div className="text-xs">{e[0].toUpperCase()}</div>
        </Div>
      ))}
    </div>
  );
}
