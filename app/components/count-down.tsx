import { DateDifference, timeBetweenDates } from "@/utils/date-util";
import Div from "./div";
import { useEffect, useState } from "react";
import { kText } from "@/constans/text";

export default function CountDown() {
  const [diff, setDiff] = useState(timeBetweenDates(kText.date));

  useEffect(() => {
    const interval = setInterval(() => {
      setDiff(timeBetweenDates(kText.date));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="flex flex-row gap-x-2 animate-blip">
      {Object.entries(diff).map((e, i) => (
        <Div
          family="poppins"
          className="h-[70px] bg-driftwood text-xl w-[70px] text-white rounded-lg items-center justify-center flex flex-col"
          key={i}
        >
          {e[1]}
          <div className="text-xs">{e[0].toUpperCase()}</div>
        </Div>
      ))}
    </div>
  );
}
