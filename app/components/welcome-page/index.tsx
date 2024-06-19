import { useText } from "@/app/hooks/useText";
import { useWeddingState } from "@/app/hooks/useWeddingProvider";
import Snowfall from "react-snowfall";

export default function WelcomePage() {
  const text = useText();
  const { showCover } = useWeddingState();

  return (
    <div className="font-italiana text-#3C471F min-h-screen flex flex-col  bg-green-100">
      {!showCover && <Snowfall />}
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
