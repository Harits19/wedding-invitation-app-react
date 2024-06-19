import { kPublic } from "@/app/constans/public";
import { useText } from "@/app/hooks/useText";
import Image from "next/image";
import InViewWrapper from "../inview-wrapper";

export default function WelcomePage() {
  const text = useText();

  const SideFlower = ({ className = "" }: { className?: string }) => (
    <Image
      className={`w-2/3 h-fit right-0 absolute object-contain bottom-0 z-auto ${className}`}
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
        <div className="h-14" />
        <InViewWrapper className="flex flex-row justify-end animate-right-left">
          <Image
            className="rounded-full overflow-hidden border-8 w-1/2 mr-8 shadow-3xl"
            alt=""
            src={kPublic.brideGroom1}
            width={214}
            height={317}
          />
        </InViewWrapper>
        <div className="h-10" />
        <InViewWrapper className="text-[29px] ml-4 animate-left-right">
          <div>{text.groomName}</div>
          <div className="-mt-2">&</div>
          <div className="-mt-2">{text.brideName}</div>
          <div className="font-cardo text-base">{text.weddingDate}</div>
        </InViewWrapper>
      </div>
    </div>
  );
}
