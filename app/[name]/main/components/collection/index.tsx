import Div from "@/app/[name]/components/div";
import Scaffold from "@/app/[name]/components/scaffold";
import { kText } from "@/app/constans/text";
import { useInvitationDetailProvider } from "@/app/[name]/hooks/use-invitation-detail";
import { concatBaseUrl } from "@/app/[name]/utils/string-util";
import Image from "next/image";

export default function Collection() {
  const { data } = useInvitationDetailProvider()
  const listImage = (data?.photo?.gallery ?? []).map((item) =>
    concatBaseUrl(item),
  );
  return (
    <Scaffold className="items-center">
      <Div family="berkshire" className="text-3xl">
        {kText.ourGallery}
      </Div>
      <div className="h-[100px]" />
      {listImage.map((e) => (
        <Image
          key={e}
          alt="image 1"
          objectFit="cover"
          className="max-w-360 h-[360px] object-cover p-1  rounded-lg"
          width={360}
          height={360}
          src={e}
        />
      ))}
      <div className="h-12" />
    </Scaffold>
  );
}
