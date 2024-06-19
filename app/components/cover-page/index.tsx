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
    return <span className="font-cardo text-3xl text-primary-color ">{text}</span>;
  };
  const Background1 = ({
    className = "",
    src,
  }: {
    className?: string;
    src: string;
  }) => {
    return (
      <Image
        alt=""
        src={src}
        width={100}
        height={100}
        className={`absolute w-mobile object-cover z-auto ${className} `}
      />
    );
  };
  return (
    <div
      className={`bg-white overflow-hidden absolute top-0 h-screen z-10 left-0 right-0 ${!showCover ? "animate-fade-out-bottom-top" : ""}`}
    >
      <Background1 className=" right-0 left-0 -bottom-10" src={kPublic.flower3} />
      <Background1 className="" src={kPublic.flower2} />

      <div className="absolute text-303333  bg-cover top-0 bottom-0 left-0 right-0 flex flex-col justify-center items-center">
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
          <div className="my-2 animate-fade-in-bottom-top font-poppins font-extrabold text-xl text-primary-color">
            {guest.name}
          </div>
          <div className="h-2" />
          <button
            onClick={() => {
              setShowCover(false);
            }}
            className="border animate-fade-in-bottom-top border-none bg-background-color text-white px-3 py-1 font-cardo rounded-lg flex flex-row items-center gap-x-2"
          >
            <FaRegEnvelopeOpen />
            {kText.bukaUndangan}
          </button>
        </div>
      </div>
    </div>
  );
}
