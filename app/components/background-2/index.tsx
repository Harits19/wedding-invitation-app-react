import { kPublic } from "@/app/constans/public";
import Image from "next/image";
import { ReactNode } from "react";

export default function Background2({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const Background = ({ className = "" }: { className?: string }) => (
    <Image
      alt=""
      src={kPublic.flower5}
      width={100}
      height={100}
      className={`h-1/2 w-full blur-sm absolute bottom-0 object-cover z-auto ${className}`}
    />
  );

  return (
    <div className="min-h-screen w-full relative bg-wedwhite-linen font-cardo text-center ">
      <Background />
      <Background className="rotate-180 top-0" />
      <Background className="rotate-180 top-0" />

      <div
        className={`absolute top-0 bottom-0 left-0 right-0 flex flex-col z-auto  m-4 ${className}`}
      >
        {children}
      </div>
    </div>
  );
}
