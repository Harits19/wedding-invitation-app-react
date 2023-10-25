import { ReactNode } from "react";
import Background from "../background";

export default function  HalfRoundBox({
  insideBox,
  aboveBox,
}: {
  insideBox?: ReactNode;
  aboveBox?: ReactNode;
}) {
  return (
    <div className="flex flex-1 flex-col relative items-center pt-8">
      <div
        className=" absolute z-0 top-0 bottom-0 overflow-hidden rounded-t-full w-[400px] h-screen self-center"
        style={{
          boxShadow: "0px -10px 9px rgba(0, 0, 0, 0.2)",
        }}
      >
        {insideBox}
      </div>
      {aboveBox}
    </div>
  );
}
