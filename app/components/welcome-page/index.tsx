import { useText } from "@/app/hooks/use-text";
import Background1 from "../background-1";
import SmallButton from "../small-button";
import { FaCalendar } from "react-icons/fa";

export default function WelcomePage() {
  const text = useText();

  return (
    <Background1>
      <div className="text-wedprimary-color flex flex-col items-center justify-center text-center">
        <div className="font-cardo  text-[20px]">{text.theWeddingOf}</div>
        <div className="h-8" />
        <div className="font-italiana text-[40px]">{text.brideAndGroom}</div>
        <div className="h-8" />
        <div className="flex flex-row items-center w-full font-cardo text-white gap-x-2 justify-center">
          {[1, 1, 1, 1].map((item, index) => (
            <div
              key={index}
              className="bg-wedprimary-color flex flex-col px-3 py-1 rounded-md"
            >
              <div>00</div>
              <div>Hari</div>
            </div>
          ))}
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
