import { useText } from "@/app/hooks/useText";
import Background2 from "../background-2";
import Title from "../title";
import Card from "../card";
import { FaCopy, FaWallet, FaWhatsapp } from "react-icons/fa";
import { ReactNode } from "react";
import { IconContext } from "react-icons/lib";

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
      <IconContext.Provider value={{ className: "text-white" }}>
        <button
          type="button"
          aria-label="small button"
          onClick={onClick}
          className="p-1 rounded bg-wedE97777C7 flex flex-row items-center justify-center text-white text-sm"
        >
          {icon}
          {title}
        </button>
      </IconContext.Provider>
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
    return (
      <Card>
        <div className="flex flex-col p-3">
          <div className="flex flex-row w-full justify-between items-center">
            <div>{text.weddingGift}</div>
            <div className="border-b-2 border-b-black">{bankName}</div>
          </div>
          <div className="flex flex-row items-center w-full justify-between">
            <div className="flex flex-col">
              <div>{text.noRekening}</div>
              <div>{noRekening}</div>
              <SmallButton
                icon={<FaCopy />}
                title={text.copy}
                onClick={() => {
                  navigator.clipboard.writeText(noRekening);
                }}
              />
              <SmallButton
                icon={<FaWhatsapp />}
                title={text.konfirmasiViaWA}
                onClick={() => {
                  window.open(
                    `https://wa.me/${whatsapp}?text=I'm%20interested%20in%20your%20car%20for%20sale`,
                  );
                }}
              />

              <div>{text.atasNama}</div>
              <div>{atasNama}</div>
            </div>

            <FaWallet />
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
