import Image from "next/image";
import SideAnimationWrapper, { Position } from "./side-animation-wrapper";
import { useInvitationDetailProvider } from "@/app/[name]/hooks/use-invitation-detail";
import { concatBaseUrl } from "@/app/[name]/utils/string-util";

export default function SideBottomDecor({
  side = "right",
}: {
  side?: Position;
}) {
  const { data } = useInvitationDetailProvider()

  return (
    <SideAnimationWrapper side={side}>
      <Image
        src={concatBaseUrl(data?.photo.side.bottom)}
        alt={"image"}
        width={150}
        height={210}
      />
    </SideAnimationWrapper>
  );
}
