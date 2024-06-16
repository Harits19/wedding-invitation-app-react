import { useGuest } from "@/app/hooks/useGuest";
import { useText } from "@/app/hooks/useText";
import { useWeddingState } from "@/app/hooks/useWeddingProvider";
import { FaRegEnvelopeOpen } from "react-icons/fa";

export default function CoverPage() {
  const { brideAndGroom, weddingDate, ...kText } = useText();
  const guest = useGuest();
  const { setShowCover } = useWeddingState();
  return (
    <div className="absolute bg-green-100 bg-cover top-0 bottom-0 left-0 right-0 flex flex-col justify-center items-center">
      <div className="font-brittany text-[50px]">{brideAndGroom}</div>
      <div className="font-cormorant">{weddingDate}</div>
      <div className="h-[200px]" />
      <div className="font-cormorant text-#3C471F">{kText.dear}</div>
      <div className="font-gallery text-[50px]">{guest.name}</div>
      <div className="font-cormorant text-#3C471F">{kText.youAreInvited}</div>
      <div className="h-4" />
      <button
        onClick={() => {
          setShowCover(false);
        }}
        className="border border-#3C471F text-#3C471F px-3 py-1 font-cormorant rounded-tr-lg rounded-tl-lg flex flex-row items-center gap-x-2"
      >
        <FaRegEnvelopeOpen />
        {kText.bukaUndangan}
      </button>
    </div>
  );
}
