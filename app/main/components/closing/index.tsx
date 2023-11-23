import Background from "@/app/components/background";
import BottomDecor from "@/app/components/bottom-decor";
import Div from "@/app/components/div";
import Scaffold from "@/app/components/scaffold";
import TopDecor from "@/app/components/top-decor";
import useDeselectMenu from "@/app/hooks/useDeselectMenu";
import { kPublic } from "@/constans/public";
import { kText } from "@/constans/text";
import Image from "next/image";

export default function Closing() {
  const ref = useDeselectMenu();
  return (
    <Scaffold className="">
      <TopDecor />
      <Div className="items-center flex flex-col -m-5 text-center p-14 ">
        <Background className="-z-10" />

        <Image
          alt="closing photo"
          className="border-driftwood border-4 rounded-md w-[219px] h-[219px] animate-fade-zoom"
          src={kPublic.photoGallery1}
        />
        <div className="h-5" />
        <div className="text-sm animate-fade-zoom">
          {kText.merupakanSuatuKebahagiaan}
        </div>
        <div className="h-10" />
        <div className="text-sm animate-fade-zoom">{kText.terimaKasih}</div>
      </Div>
      <div ref={ref} className="bg-driftwood relative flex flex-col">
        <button
          onClick={() => {
            window.open(`https://www.instagram.com/${kText.instagramId}`);
          }}
          className="self-center absolute bottom-0 flex flex-col items-center"
        >
          <Image
            className="object-contain rounded-lg"
            alt="instagram logo"
            width={40}
            height={40}
            src={
              "https://play-lh.googleusercontent.com/VRMWkE5p3CkWhJs6nv-9ZsLAs1QOg5ob1_3qg-rckwYW7yp1fMrYZqnEFpk0IoVP4LM=w480-h960-rw"
            }
          />
          <div className="h-2" />
          <div className="">{kText.instagramId}</div>

          <div className="h-24" />
        </button>

        <BottomDecor />
      </div>
    </Scaffold>
  );
}
