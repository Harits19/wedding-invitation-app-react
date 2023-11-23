"use client";
import { kFontFamily } from "@/constans/font-family";
import { DetailedHTMLProps, HtmlHTMLAttributes } from "react";
import { useInView } from "react-intersection-observer";

export default function Div({
  family = "poppins",
  ...props
}: DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
  family?: "averia" | "berkshire" | "poppins";
}) {
  const { inView, ref } = useInView();
  return (
    <div ref={ref}>
      <div
        key={`${inView}`}
        {...props}
        className={`text-303333 ${props.className}`}
        style={{
          fontFamily: kFontFamily[family],
          lineHeight: 1.7,
          ...props.style,
        }}
      />
    </div>
  );
}
