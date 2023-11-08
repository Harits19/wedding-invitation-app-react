"use client";

import { kFontFamily } from "@/constans/font-family";
import { kSize } from "@/constans/size";
import { ReactNode } from "react";

export default function Scaffold({
  transparent = false,
  ...props
}: {
  children?: ReactNode;
  className?: string;
  transparent?: boolean;
}) {
  const background = (
    <div className={`${transparent ? "" : "bg-303333"} flex-1`} />
  );
  return (
    <div className="flex flex-row justify-center w-screen">
      {background}
      <div
        className={` max-w-[360px] flex-col flex flex-1 overflow-hidden relative ${props.className}`}
        style={{ fontFamily: kFontFamily.poppins }}
      >
        {props.children}
      </div>
      {background}
    </div>
  );
}
