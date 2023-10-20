import { kPublic } from "@/constans/public";
import Image from "next/image";
import SideAnimationWrapper, { Position } from "./side-animation-wrapper";

export default function SideBottomDecor({
  side = "right",
}: {
  side?: Position;
}) {
  return (
    <SideAnimationWrapper side={side}>
      <Image
        src={kPublic.sideBottomDecor}
        alt={"image"}
        width={150}
        height={210}
      />
    </SideAnimationWrapper>
  );
}
