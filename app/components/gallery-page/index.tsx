import { useText } from "@/app/hooks/use-text";
import Background2 from "../background-2";
import Image from "next/image";
import { kPublic } from "@/app/constans/public";
import InViewWrapper from "../inview-wrapper";
import { CSSProperties } from "react";

export default function GalleryPage() {
  const text = useText();
  const GalleryImage = ({
    className = "",
    style,
  }: {
    className?: string;
    style?: CSSProperties;
  }) => (
    <Image
      className={`w-full rounded-md h-full flex flex-1 object-cover ${className}`}
      alt="asad"
      src={kPublic.brideGroom1}
      width={100}
      style={style}
      height={50}
    />
  );

  const GalleryContainer = ({ className = "" }: { className?: string }) => (
    <InViewWrapper className={`flex flex-row  gap-x-4 h-[300px] ${className}`}>
      <div className="flex flex-col gap-y-4  flex-1 h-full ">
        {[1, 1].map((_, index) => (
          <div key={index} className="flex flex-1 overflow-hidden ">
            <GalleryImage style={{ objectPosition: "20% 20%" }} />
          </div>
        ))}
      </div>
      <div className="flex flex-1">
        <GalleryImage className="h-[100px]" />
      </div>
    </InViewWrapper>
  );
  return (
    <Background2>
      <div className="flex flex-1 justify-center flex-col items-center font-cardo text-black text-[37px]">
        <InViewWrapper className="animate-fade-zoom">
          {text.gallery}
        </InViewWrapper>
        <div className="h-4" />
        <GalleryContainer className="animate-left-right" />
        <div className="h-4" />
        <GalleryContainer className=" animate-right-left flex-row-reverse" />
      </div>
    </Background2>
  );
}
