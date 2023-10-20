import { kSize } from "@/constans/size";
import { ReactNode } from "react";

export default function Scaffold(props: { children?: ReactNode }) {
  const { width, height } = kSize.max.window;

  return (
    <div className="flex flex-row justify-center">
      <div
        className={`flex flex-col h-[100vh] w-[100vw] overflow-hidden relative`}
        style={{
          maxHeight: height,
          maxWidth: width,
        }}
      >
        {props.children}
      </div>
    </div>
  );
}
