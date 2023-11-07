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
    <div className="flex flex-row justify-center w-screen">
      <div
        className={` max-w-[360px] flex-col flex flex-1 overflow-hidden relative ${props.className}`}
      >
        {props.children}
      </div>
    </div>
  );
}
