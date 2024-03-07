import Image from "next/image";
import SideAnimationWrapper from "./side-animation-wrapper";
import { useInvitationDetailProvider } from "@/app/[name]/hooks/use-invitation-detail";
import { concatBaseUrl } from "@/app/[name]/utils/string-util";

export default function SideTopDecor({
  side = "right",
}: {
  side?: "left" | "right";
}) {
  const { data } = useInvitationDetailProvider()
  return (
    <SideAnimationWrapper side={side}>
      <Image
        src={concatBaseUrl(data?.photo.side.top)}
        alt={"image"}
        width={150}
        height={122}
      />
    </SideAnimationWrapper>
  );
}
