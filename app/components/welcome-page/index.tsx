import { useText } from "@/app/core/hooks/use-text";
import Background1 from "../background-1";
import SmallButton from "../small-button";
import { FaCalendar } from "react-icons/fa";
import { useEffect, useMemo, useState } from "react";
import { timeBetweenDates } from "@/app/core/utils/date-util";

export default function WelcomePage() {
  const text = useText();

  const date = useMemo(() => {
    return text.rawWeddingDate;
  }, [text.rawWeddingDate]);
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
    <Background1>
      <div className="text-wedprimary-color flex flex-col items-center justify-center text-center">
        <div className="font-cardo  text-[20px]">{text.theWeddingOf}</div>
        <div className="h-8" />
        <div className="font-italiana text-[40px]">{text.brideAndGroom}</div>
        <div className="h-8" />
        <div className="flex flex-row items-center w-full font-cardo text-white gap-x-2 justify-center">
          {Object.entries(diff).map((item, index) => {
            const title = {
              hours: "Jam",
              seconds: "Detik",
              days: "Hari",
              minutes: "Menit",
            }[item[0]];
            return (
              <div
                key={index}
                className="bg-wedprimary-color flex flex-col w-16 h-16 justify-center items-center rounded-md"
              >
                <div>{item[1]}</div>
                <div>{title}</div>
              </div>
            );
          })}
        </div>
        <div className="h-16" />
        <SmallButton
          className="bg-wedprimary-color"
          icon={<FaCalendar />}
          title={text.saveToCalendar}
          onClick={() => {
            window.open(text.googleCalendarLink);
          }}
        />
      </div>
    </Background1>
  );
}
