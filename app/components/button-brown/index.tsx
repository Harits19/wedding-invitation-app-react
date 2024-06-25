import { ReactNode } from "react";

export default function ButtonBrown({
  onClick,
  children,
  className,
}: {
  onClick: () => void;
  children: ReactNode;
  className?: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`border animate-fade-in-bottom-top border-none bg-wedprimary-color text-white px-3 py-1 font-cardo rounded-lg flex flex-row items-center gap-x-2 ${className ?? ""}`}
    >
      {children}
    </button>
  );
}
