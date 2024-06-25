import Div from "@/app/[name]/components/div";
import Background from "@/app/[name]/components/background";
import BottomDecor from "@/app/[name]/components/bottom-decor";
import Scaffold from "@/app/[name]/components/scaffold";
import TopDecor from "@/app/[name]/components/top-decor";
import Image from "next/image";
import { useInvitationDetailProvider } from "@/app/[name]/hooks/use-invitation-detail";
import { concatBaseUrl } from "@/app/[name]/utils/string-util";
import { BrideGroomSrc } from "@/app/[name]/model/invitation-model";

export default function People() {
  const { data } = useInvitationDetailProvider();

  const Bride = ({ item }: { item?: BrideGroomSrc }) => {
    return (
      <div className="rounded-xl text-center relative flex flex-col flex-1 overflow-hidden   items-center px-5 py-14 shadow-2xl mx-4">
        <Background className="-z-10 h-screen w-screen -scale-y-100" />
        <div className="w-[160px] h-[160px] bg-wedDriftwood rounded-full  p-1 overflow-hidden">
          <Image
            alt="mempelai 1"
            src={concatBaseUrl(item?.photo)}
            width={100}
            height={100}
            className=" w-full h-full bg-white rounded-full self-center animate-bottom-top"
          />
        </div>
        <br />
        <Div family="berkshire" className="text-3xl animate-bottom-top">
          {item?.name}
        </Div>
        <br />
        <Div family="poppins" className="text-sm animate-bottom-top">
          Anak {1} dari Pasangan
          <br /> {item?.father_name} & <br />
          {item?.mother_name} <br />
          {item?.address}
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
      <Bride item={data?.groom} />
      <br />
      <Image
        className="animate-wiggle-left w-1/3 self-center"
        alt="divider"
        width={100}
        height={100}
        src={concatBaseUrl(data?.photo?.divider)}
      />
      <br />
      <Bride item={data?.bride} />

      <div className="h-24" />
      <div className="absolute bottom-0 left-0 right-0">
        <BottomDecor />
      </div>
    </Scaffold>
  );
}
