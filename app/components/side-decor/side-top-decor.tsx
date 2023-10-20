import { kPublic } from "@/constans/public";
import Image from "next/image";
import SideAnimationWrapper from "./side-animation-wrapper";

export default function SideTopDecor({
  side = "right",
}: {
  side?: "left" | "right";
}) {
  return (
    <SideAnimationWrapper side={side}>
      <Image
        src={kPublic.sideTopDecor}
        alt={"image"}
        width={150}
        height={122}
      />
    </SideAnimationWrapper>
  );
}
