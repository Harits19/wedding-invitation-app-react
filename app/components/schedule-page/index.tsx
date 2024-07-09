import { useText } from "@/app/core/hooks/use-text";
import Background1 from "../background-1";
import { FaLocationArrow } from "react-icons/fa";
import Card from "../card";

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
    <Card align={align}>
      <div className="font-cardo text-[18px] font-bold">{title}</div>
      <div className="text-[12px]">{date}</div>
      <div className="text-[12px]">{time}</div>
      <div className="h-2" />
      <div className="text-[12px]">{text.bertempatDi}</div>
      <div className="text-[14px] font-bold">{location1}</div>
      <div className="text-[12px]">{location2}</div>
      <div className="h-2" />

      <div
        className={`flex flex-row ${align === "left" ? "justify-start" : " justify-end"}`}
      >
        <button
          onClick={() => {
            window.open(linkLocation);
          }}
          className="bg-wedprimary-color text-white rounded-md font-cardo text-[12px] items-center justify-center px-2 py-1 flex flex-row"
        >
          <FaLocationArrow width={12} height={12} size={"12px"} />
          <div className="w-2" />
          <div>{text.lihatLokasi + " " + title}</div>
        </button>
      </div>
    </Card>
  );

  return (
    <Background1>
      <div className="flex flex-col p-4 justify-center items-center ">
        <RenderCard value={text.akad} align="right" />
        <div className="h-4" />
        <RenderCard value={text.resepsi} />
      </div>
    </Background1>
  );
}
