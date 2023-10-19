import { kFontFamily } from "@/constans/text";
import { DetailedHTMLProps, HtmlHTMLAttributes } from "react";

export default function Text({
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
        ...props.style,
      }}
    />
  );
}
