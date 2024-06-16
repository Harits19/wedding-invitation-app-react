import { useText } from "@/app/hooks/useText";
import Snowfall from "react-snowfall";

export default function WelcomePage() {
  const text = useText();

  return (
    <div className="font-italiana text-#3C471F h-screen flex flex-col  bg-green-100">
      <Snowfall />
      <div className=" flex flex-1" />
      <div className="px-4 flex flex-col justify-center gap-y-6">
        <div className="text-[24px]">{text.theWeddingOf}</div>
        <div className="font-brittany text-[64px]  text-right">
          {text.brideName}
          <br />
          &
          <br />
          {text.groomName}
        </div>
        <div className="text-[24px]">{text.weddingDate}</div>
      </div>
      <div className=" flex flex-1" />
    </div>
  );
}
