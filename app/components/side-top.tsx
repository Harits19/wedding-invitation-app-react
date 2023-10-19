

import { kPublic } from "@/constans/public";
import Image from "next/image";

export default function SideTop({
  side = "right",
}: {
  side?: "left" | "right";
}) {
  return (
    <Image
      src={kPublic.sideTop}
      alt={"image"}
      width={150}
      height={210}
      style={{
        transform: side === "left" ? "scaleX(-1)" : undefined,
      }}
    />
  );
}
