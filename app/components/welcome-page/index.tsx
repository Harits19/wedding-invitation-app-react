import { kPublic } from "@/app/constans/public";
import { useText } from "@/app/hooks/useText";
import Image from "next/image";
import InViewWrapper from "../inview-wrapper";
import Background1 from "../background-1";

export default function WelcomePage() {
  const text = useText();

  return (
    <Background1>
      <div className="h-14" />
      <InViewWrapper className="flex flex-row justify-end animate-right-left">
        <Image
          className="rounded-full overflow-hidden w-[214px] h-[317px] border-8 mr-8 shadow-3xl"
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
    </Background1>
  );
}
