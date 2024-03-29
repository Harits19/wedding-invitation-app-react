import React from "react";

interface Props
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  loading?: boolean;
}

export default function Button({ loading, ...props }: Props) {
  return (
    <button
      {...props}
      className={`${props.disabled ? "opacity-30" : ""} ${
        props.className
      } bg-blue-500 text-white p-2 rounded-lg text-sm w-fit
      `}
    >
      {loading ? "Loading" : props.children}
    </button>
  );
}
