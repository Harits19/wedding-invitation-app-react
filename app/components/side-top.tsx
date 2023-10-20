import { kPublic } from "@/constans/public";
import Image from "next/image";

export default function SideTop({
  side = "right",
}: {
  side?: "left" | "right";
}) {
  return (
    <div className={`animate-wiggle-${side}`}>
      <Image
        src={kPublic.sideTop}
        alt={"image"}
        width={150}
        height={210}
        style={{
          transform: side === "left" ? "scaleX(-1)" : undefined,
        }}
      />
    </div>
  );
}
