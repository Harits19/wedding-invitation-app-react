"use client";

import { kFontFamily } from "@/constans/font-family";
import { ReactNode } from "react";

export default function Scaffold({
  transparent = false,
  ...props
}: {
  children?: ReactNode;
  className?: string;
  transparent?: boolean;
}) {
  return (
    <div
      className={`flex flex-row justify-center w-screen ${
        transparent ? "" : "bg-303333"
      }`}
    >
      <div
        className={` max-w-[360px] flex-col flex flex-1 overflow-hidden ${!transparent ? `bg-white` : ''} relative ${props.className}`}
        style={{ fontFamily: kFontFamily.poppins }}
      >
        {props.children}
      </div>
    </div>
  );
}
