import { kPublic } from "@/app/constans/public";
import { useGuest } from "@/app/hooks/useGuest";
import { useText } from "@/app/hooks/useText";
import { useWeddingState } from "@/app/hooks/useWeddingProvider";
import Image from "next/image";
import { FaRegEnvelopeOpen } from "react-icons/fa";

export default function CoverPage() {
  const { weddingDate, ...kText } = useText();
  const guest = useGuest();
  const { setShowCover, showCover } = useWeddingState();
  const RenderName = ({ text }: { text: string }) => {
    return <span className="font-cardo text-3xl ">{text}</span>;
  };
  const Background1 = ({ className = "" }: { className?: string }) => {
    return (
      <Image
        alt=""
        src={kPublic.background1}
        width={100}
        height={100}
        className={`absolute w-mobile left-0 right-0 object-cover z-auto ${className} opacity-0`}
      />
    );
  };
  return (
    <div
      className={`bg-white absolute top-0 bottom-0 z-10 left-0 right-0 ${!showCover ? "animate-fade-out-bottom-top" : ""}`}
    >
      <Background1 className="h-full" />
      <Background1 className="h-fit bottom-0" />
      <Background1 className="rotate-180 h-fit" />

      <div className="absolute text-#434343  bg-cover top-0 bottom-0 left-0 right-0 flex flex-col justify-center items-center">
        <div className="animate-top-bottom-fade flex flex-col items-center">
          <span className="font-arizona  text-xl">{kText.theWeddingOf}</span>
          <RenderName text={kText.brideName} />
          <div className="font-arizona text-[32px] -my-2">{kText.and}</div>
          <RenderName text={kText.groomName} />
        </div>

        <div className=" animate-fade-in my-6">{weddingDate}</div>

        <div className="animate-bottom-top-fade flex flex-col items-center">
          <div className="animate-fade-in-bottom-top">{kText.kepadaYth}</div>
          <div className="animate-fade-in-bottom-top">
            {kText.bapakIbuSaudara}
          </div>
          <div className="my-2 animate-fade-in-bottom-top font-poppins font-extrabold text-xl">
            {guest.name}
          </div>
          <div className="h-2" />
          <button
            onClick={() => {
              setShowCover(false);
            }}
            className="border animate-fade-in-bottom-top border-#CB2F2FC7 bg-#E97777C7 text-white px-3 py-1 font-cardo rounded-lg flex flex-row items-center gap-x-2"
          >
            <FaRegEnvelopeOpen />
            {kText.bukaUndangan}
          </button>
        </div>
      </div>
    </div>
  );
}
