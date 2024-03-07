import Image from "next/image";
import SideAnimationWrapper, { Position } from "./side-animation-wrapper";
import { useInvitationDetailState } from "@/app/hooks/use-invitation-detail";
import { concatBaseUrl } from "@/app/utils/string-util";

export default function SideBottomDecor({
  side = "right",
}: {
  side?: Position;
}) {
  const data = useInvitationDetailState();

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
