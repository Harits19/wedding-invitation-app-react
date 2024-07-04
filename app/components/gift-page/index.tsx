import { useText } from "@/app/hooks/useText";
import Background2 from "../background-2";
import Title from "../title";
import Card from "../card";
import { FaCopy, FaWallet, FaWhatsapp } from "react-icons/fa";
import { ReactNode } from "react";

export default function GiftPage() {
  const text = useText();

  const SmallButton = ({
    onClick,
    title,
    icon,
  }: {
    title: string;
    onClick: () => void;
    icon: ReactNode;
  }) => {
    return (
      <button
        type="button"
        aria-label="small button"
        onClick={onClick}
        className="px-4 gap-x-2 py-1 rounded-xl text-[10px] bg-wedE97777C7 flex flex-row items-center justify-center text-white text-sm"
      >
        {icon}
        <div className="text-[10px]">{title}</div>
      </button>
    );
  };

  const RenderCard = ({
    bankName,
    atasNama,
    noRekening,
    whatsapp,
  }: {
    bankName: string;
    noRekening: string;
    whatsapp: string;
    atasNama: string;
  }) => {
    const Description = ({
      subtitle,
      title,
    }: {
      title: string;
      subtitle: string;
    }) => {
      return (
        <>
          <div className="font-cormorant text-sm">{title}</div>
          <div>{subtitle}</div>
        </>
      );
    };

    return (
      <Card>
        <div className="flex flex-col p-3">
          <div className="flex flex-row w-full justify-between items-center">
            <div className="font-cardo">{text.weddingGift}</div>
            <div className="border-b-2 border-b-black pl-8">{bankName}</div>
          </div>
          <div className="h-1" />
          <div className="flex flex-row items-center w-full justify-between">
            <div className="flex flex-col">
              <Description title={text.noRekening} subtitle={noRekening} />
              <div className="h-3" />
              <SmallButton
                icon={<FaCopy />}
                title={text.copy}
                onClick={() => {
                  navigator.clipboard.writeText(noRekening);
                }}
              />
              <div className="h-1" />
              <SmallButton
                icon={<FaWhatsapp />}
                title={text.konfirmasiViaWA}
                onClick={() => {
                  window.open(
                    `https://wa.me/${whatsapp}?text=I'm%20interested%20in%20your%20car%20for%20sale`,
                  );
                }}
              />
              <div className="h-3" />

              <Description title={text.atasNama} subtitle={atasNama} />
            </div>

            <FaWallet className="text-[80px] text-wedE97777C7" />
          </div>
        </div>
      </Card>
    );
  };
  return (
    <Background2>
      <Title title={text.weddingGift} />
      {[text.bank, text.bank].map((item) => (
        <RenderCard key={item.noRekening} {...item} />
      ))}
    </Background2>
  );
}
