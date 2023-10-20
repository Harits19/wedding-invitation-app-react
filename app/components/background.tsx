import { kPublic } from "@/constans/public";
import Image from "next/image";

export default function Background({ className }: { className?: string }){
  return (
    <Image
      className={`absolute top-0 left-0 right-0 bottom-0 w-full h-full ${className} object-cover`}
      src={kPublic.background1}
      alt="asd"
    />
  );
};