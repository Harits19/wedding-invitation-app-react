import { kPublic } from "@/app/constans/public";
import { useText } from "@/app/hooks/useText";
import Image from "next/image";
import InViewWrapper from "../inview-wrapper";
import Background2 from "../background-2";

export default function IntroductionPage() {
  const text = useText();
  const RenderCoupleName = ({
    value: { fullName, parentName, sonOrder },
  }: {
    value: {
      fullName: string;
      sonOrder: string;
      parentName: string;
    };
  }) => (
    <div className="font-poppins">
      <div className="font-cardo text-[20px] font-bold">{fullName}</div>
      <div className="text-[16px]">{sonOrder}</div>
      <div className="text-[12px]">{parentName}</div>
    </div>
  );

  const Divider = () => <div className=" flex flex-1 h-0.5 bg-black w-full" />;

  return (
    <Background2>
      <div className="bg-opacity-50 bg-white rounded-xl p-4 justify-center items-center flex flex-col flex-1">
        <InViewWrapper className="font-semibold text-[20px] animate-fade-in-top-bottom">
          {text.assalamualaikum}
        </InViewWrapper>
        <div className="font-poppins text-[12px]">
          {text.denganMemohonRahmat}
        </div>
        <div className="h-4" />
        <InViewWrapper className="animate-fade-in-bottom-top">
          <Image
            alt=""
            src={kPublic.brideGroom1}
            width={260}
            height={101}
            className="overflow-hidden border-2 border-white w-[260px] h-[181px] object-cover -rotate-3 shadow-3xl"
            style={{
              objectPosition: "50% 20%",
            }}
          />
        </InViewWrapper>
        <div className="h-8" />

        <InViewWrapper className="animate-left-right">
          <RenderCoupleName value={text.groom} />
        </InViewWrapper>

        <div className="my-4 flex flex-row font-bold text-[20px] w-[150px] justify-center items-center gap-x-2">
          <Divider />
          &
          <Divider />
        </div>

        <InViewWrapper className="animate-right-left">
          <RenderCoupleName value={text.bride} />
        </InViewWrapper>
      </div>
    </Background2>
  );
}
