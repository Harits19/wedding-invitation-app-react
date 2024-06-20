import { kPublic } from "@/app/constans/public";
import Image from "next/image";
import { ReactNode } from "react";

export default function Background1({ children }: { children: ReactNode }) {
  const SideFlower = ({ className = "" }: { className?: string }) => (
    <Image
      className={`w-1/2 h-fit right-0 absolute object-contain bottom-0 z-auto ${className}`}
      width={100}
      height={100}
      alt=""
      src={kPublic.sideFlower1}
    />
  );

  return (
    <div className=" min-h-screen relative overflow-hidden flex flex-col bg-background-color-light font-cardo text-primary-color">
      <Image
        alt=""
        src={kPublic.background1}
        width={100}
        height={100}
        className="h-full w-full object-cover absolute top-0 bottom-0 left-0 right-0"
      />
      <SideFlower />
      <SideFlower className="top-0 rotate-180 left-0 -ml-10 -mt-20" />
      <div className="flex flex-col absolute top-0 bottom-0 left-0 right-0 z-auto">
        {children}
      </div>
    </div>
  );
}
