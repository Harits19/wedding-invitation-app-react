import { ReactNode } from "react";
import TextDiv from "../averia";

export interface InputDecorationProps{
  label?: string;
  children: ReactNode;
}

export default function InputDecoration({
  label,
  ...props
}: InputDecorationProps) {
  const className = `border text-sm px-5 py-2 rounded-sm `;
  return (
    <TextDiv className="flex flex-col items-stretch">
      {label ? (
        <>
          <div className="text-xs text-start">{label}</div>
          <div className="h-1" />
        </>
      ) : undefined}
      <div className={`${className} flex flex-col`}>{props.children}</div>
    </TextDiv>
  );
}
