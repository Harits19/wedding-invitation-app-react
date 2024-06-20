import { useText } from "@/app/hooks/useText";
import Background1 from "../background-1";
import { FaLocationArrow } from "react-icons/fa";

export default function SchedulePage() {
  const text = useText();
  const RenderCard = ({
    value: { date, location1, location2, time, title, linkLocation },
    align = "left",
  }: {
    value: {
      title: string;
      date: string;
      time: string;
      location1: string;
      location2: string;
      linkLocation: string;
    };
    align?: "left" | "right";
  }) => (
    <div className="w-full border border-white p-2 h-fit bg-white rounded-xl bg-opacity-50">
      <div
        className={`h-full w-full flex flex-col shadow-xl rounded-xl p-2 font-poppins text-black ${align === "left" ? "items-start text-left" : "items-end text-right"}`}
      >
        <div className="font-cardo text-[24px] font-bold">{title}</div>
        <div className="text-[18px]">{date}</div>
        <div className="text-[15px]">{time}</div>
        <div className="text-[16px]">{text.bertempatDi}</div>
        <div className="text-[18px]">{location1}</div>
        <div className="text-[16px]">{location2}</div>
        <button
          onClick={() => {
            window.open(linkLocation);
          }}
          className="bg-primary-color text-white rounded-md font-cardo text-[12px] items-center justify-center px-2 py-1 flex flex-row"
        >
          <FaLocationArrow width={12} height={12} size={"12px"} />
          <div className="w-2" />
          <div>{text.lihatLokasi + " " + title}</div>
        </button>
      </div>
    </div>
  );

  return (
    <Background1>
      <div className="flex flex-col p-4  h-full justify-center items-center ">
        <RenderCard value={text.akad} align="right" />
        <div className="h-4" />
        <RenderCard value={text.resepsi} />
      </div>
    </Background1>
  );
}
