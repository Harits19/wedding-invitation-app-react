"use client";

import { kSize } from "@/constans/size";
import { ReactNode } from "react";

export default function Scaffold({
  ...props
}: {
  children?: ReactNode;
  className?: string;
}) {
  const { width, height } = kSize.max.window;

  return (
    <div className="flex flex-row justify-center">
      <div
        className={`flex flex-col min-h-screen w-[100vw] overflow-hidden relative`}
        style={{
          maxWidth: width,
        }}
      >
        {props.children}
      </div>
    </div>
  );
}
