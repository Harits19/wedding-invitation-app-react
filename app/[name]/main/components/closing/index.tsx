import Background from "@/app/[name]/components/background";
import BottomDecor from "@/app/[name]/components/bottom-decor";
import Div from "@/app/[name]/components/div";
import Scaffold from "@/app/[name]/components/scaffold";
import TopDecor from "@/app/[name]/components/top-decor";
import useDeselectMenu from "@/app/[name]/hooks/use-deselect-menu";
import { kText } from "@/app/constans/text";
import Image from "next/image";
import { useInvitationDetailProvider } from "@/app/[name]/hooks/use-invitation-detail";
import { concatBaseUrl } from "@/app/[name]/utils/string-util";

export default function Closing() {
  const ref = useDeselectMenu();
  const { data } = useInvitationDetailProvider()
  return (
    <Scaffold className="">
      <TopDecor />
      <Div className="items-center flex flex-col -m-5 text-center p-14 ">
        <Background className="-z-10" />

        <Image
          alt="closing photo"
          className="border-wedDriftwood border-4 rounded-md w-[219px] h-[219px] animate-fade-zoom"
          width={219}
          height={219}
          src={concatBaseUrl(data?.photo?.gallery.at(0))}
        />
        <div className="h-5" />
        <div className="text-sm animate-fade-zoom">
          {kText.merupakanSuatuKebahagiaan}
        </div>
        <div className="h-10" />
        <div className="text-sm animate-fade-zoom">{kText.terimaKasih}</div>
      </Div>
      <div ref={ref} className="bg-wedDriftwood relative flex flex-col">
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
