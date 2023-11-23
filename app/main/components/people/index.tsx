import Div from "@/app/components/div";
import Background from "@/app/components/background";
import BottomDecor from "@/app/components/bottom-decor";
import Scaffold from "@/app/components/scaffold";
import TopDecor from "@/app/components/top-decor";
import { kPublic } from "@/constans/public";
import { kText } from "@/constans/text";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

export default function People() {
  const Bride = ({
    alamatPengantin,
    ayahPengantin,
    ibuPengantin,
    namaPengantin,
    photo,
    anakKe,
  }: {
    photo: StaticImport;
    namaPengantin: string;
    ayahPengantin: string;
    ibuPengantin: string;
    alamatPengantin: string;
    anakKe: string;
  }) => {
    return (
      <div className="rounded-xl text-center relative flex flex-col flex-1 overflow-hidden   items-center px-5 py-14 shadow-2xl mx-4">
        <Background className="-z-10 h-screen w-screen -scale-y-100" />
        <div className="w-[160px] h-[160px] bg-driftwood rounded-full  p-1 overflow-hidden">
          <Image
            alt="mempelai 1"
            src={photo}
            className=" w-full h-full bg-white rounded-full self-center animate-bottom-top"
          />
        </div>
        <br />
        <Div family="berkshire" className="text-3xl animate-bottom-top">
          {namaPengantin}
        </Div>
        <br />
        <Div family="poppins" className="text-sm animate-bottom-top">
          Anak {anakKe} dari Pasangan
          <br /> {ayahPengantin} & <br />
          {ibuPengantin} <br />
          {kText.alamatPengantin1}
        </Div>
      </div>
    );
  };
  return (
    <Scaffold>
      <div className="absolute right-0 left-0 ">
        <TopDecor />
      </div>
      <Background className="-scale-y-100 -z-10 " />
      <div className="h-24" />
      <Bride
        photo={kPublic.photoPengatin1}
        namaPengantin={kText.namaPengantin1}
        ayahPengantin={kText.ayahPengantin1}
        ibuPengantin={kText.ibuPengantin1}
        alamatPengantin={kText.alamatPengantin1}
        anakKe={kText.anakKePengantin1}
      />
      <br />
      <Image
        className="animate-wiggle-left w-1/3 self-center"
        alt="divider"
        src={kPublic.dividerDecor}
      />
      <br />
      <Bride
        photo={kPublic.photoPengatin2}
        namaPengantin={kText.namaPengantin2}
        ayahPengantin={kText.ayahPengantin2}
        ibuPengantin={kText.ibuPengantin2}
        alamatPengantin={kText.alamatPengantin2}
        anakKe={kText.anakKePengantin2}
      />
      <div className="h-24" />
      <div className="absolute bottom-0 left-0 right-0">
        <BottomDecor />
      </div>
    </Scaffold>
  );
}
