import { kFontFamily } from "@/constans/font-family";
import { DetailedHTMLProps, HtmlHTMLAttributes } from "react";

export default function TextDiv({
  family = "poppins",
  ...props
}: DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
  family?: "averia" | "berkshire" | "poppins";
}) {
  return (
    <div
      {...props}
      className={`text-303333 ${props.className}`}
      style={{
        fontFamily: kFontFamily[family],
        lineHeight: 1.7,
        ...props.style,
      }}
    />
  );
}
