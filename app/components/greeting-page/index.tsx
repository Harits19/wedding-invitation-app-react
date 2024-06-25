import { useText } from "@/app/hooks/useText";
import Background2 from "../background-2";
import InViewWrapper from "../inview-wrapper";
import { useGuest } from "@/app/hooks/useGuest";
import ButtonBrown from "../button-brown";

export default function GreetingPage() {
  const text = useText();
  const { name } = useGuest();
  const inputClassName =
    "w-full px-4 py-3 rounded-lg bg-white outline-none shadow-lg";
  return (
    <Background2 className="mx-0">
      <div className="flex flex-1 justify-center flex-col w-full items-center font-cardo text-black">
        <InViewWrapper className="animate-fade-zoom text-[37px]">
          {text.doaDanUcapan}
        </InViewWrapper>

        <div className="h-10" />

        <InViewWrapper className="animate-fade-in-bottom-top w-full font-poppins px-4">
          <input
            placeholder={text.silahkanIsiNamaAnda}
            defaultValue={name}
            className={inputClassName}
          />
          <div className="h-4" />

          <textarea
            placeholder={text.silahkanIsiNamaAnda}
            defaultValue={name}
            className={inputClassName}
          />
          <div className="h-8" />
          <ButtonBrown
            className="w-full px-4 py-3 flex flex-col items-center justify-center"
            onClick={() => {}}
          >
            {text.kirimkanUcapan}
          </ButtonBrown>
        </InViewWrapper>
        <div className="h-12" />

        <div className="w-full mx-4">
          <InViewWrapper className=" h-[400px] rounded-lg overflow-hidden shadow overflow-y-scroll gap-y-4 flex flex-col p-4 mx-4  bg-wedbackground-color">
            {new Array(20).fill(undefined).map((_, index) => (
              <InViewWrapper
                className="animate-left-right shadow-lg bg-white text-left rounded-lg flex flex-col p-4 items-stretch w-full"
                key={index}
              >
                <div className="text-wedDriftwood">Nama</div>
                <div className="font-poppins">
                  Semoga Sakinah Mawadah Warahmah
                </div>
              </InViewWrapper>
            ))}
          </InViewWrapper>
        </div>
      </div>
    </Background2>
  );
}
