"use client";

import { kFontFamily } from "@/app/constans/font-family";
import { ReactNode } from "react";

export default function Scaffold({
  ...props
}: {
  children?: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={` flex-col flex overflow-hidden relative ${props.className}`}
      style={{ fontFamily: kFontFamily.poppins }}
    >
      {props.children}
    </div>
  );
}
