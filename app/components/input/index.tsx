import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import RenderError from "../render-error";

export interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  info?: string;
}

export default function Input({ info, ...props }: InputProps) {
  return (
    <>
      <input {...props} />
      <RenderError message={info} />
    </>
  );
}
