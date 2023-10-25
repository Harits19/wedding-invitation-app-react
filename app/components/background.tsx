import { kPublic } from "@/constans/public";
import { kSize } from "@/constans/size";
import Image from "next/image";

export default function Background({ className }: { className?: string }) {
  const { width } = kSize.max.window;

  return (
    <Image
      className={`absolute top-0 left-0 right-0 bottom-0 h-full w-[${width}px] ${className} object-cover overflow-hidden`}
      src={kPublic.background1}
      alt="background"
    />
  );
}
