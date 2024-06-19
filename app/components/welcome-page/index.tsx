import { kPublic } from "@/app/constans/public";
import { useText } from "@/app/hooks/useText";
import Image from "next/image";

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
    <div className=" h-screen relative overflow-hidden flex flex-col bg-background-color-light font-cardo text-primary-color">
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
        <div className="flex flex-row justify-end">
          <Image
            className="rounded-full overflow-hidden border-8 w-1/2 mr-8 shadow-3xl"
            alt=""
            src={kPublic.brideGroom1}
            width={214}
            height={317}
          />
        </div>
        <div className="h-10" />
        <div className="text-[29px] ml-4">
          <div>{text.groomName}</div>
          <div className="-mt-2">&</div>
          <div className="-mt-2">{text.brideName}</div>
          <div className="font-cardo text-base">{text.weddingDate}</div>
        </div>
      </div>

      {/* <div className=" flex flex-1" />
      <div className="px-4 flex flex-col justify-center gap-y-6">
        <div className="text-[24px]">{text.theWeddingOf}</div>
        <div className="font-brittany text-[64px]  text-right">
          {text.brideName}
          <br />
          &
          <br />
          {text.groomName}
        </div>
        <div className="text-[24px]">{text.weddingDate}</div>
      </div>
      <div className=" flex flex-1" /> */}
    </div>
  );
}
