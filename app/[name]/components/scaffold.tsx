"use client";

import { kFontFamily } from "@/app/[name]/constans/font-family";
import { ReactNode } from "react";
import { Input } from "./ui/input";

export default function Scaffold({
  ...props
}: {
  children?: ReactNode;
  className?: string;
}) {
  return (
    <div className={`flex flex-row justify-center w-screen `}>
      <div className="p-4">
        <Input />
      </div>
      <div
        className={` max-w-[360px] flex-col flex flex-1 overflow-hidden relative ${props.className}`}
        style={{ fontFamily: kFontFamily.poppins }}
      >
        {props.children}
      </div>
    </div>
  );
}
