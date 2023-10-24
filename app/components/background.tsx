import { kPublic } from "@/constans/public";
import { kSize } from "@/constans/size";
import Image from "next/image";

export default function Background({ className }: { className?: string }) {
  const { width } = kSize.max.window;
  return (
    <div
      className={`absolute top-0 left-0 right-0 bottom-0 w-[${width}px] min-h-screen ${className} object-cover overflow-hidden`}
    >
      <Image src={kPublic.background1} alt="asd" />
      <Image src={kPublic.background1} alt="asd" className="-scale-y-100" />
    </div>
  );
}
