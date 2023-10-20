import { kPublic } from "@/constans/public";
import Image from "next/image";

export default function SideBtn({
  side = "right",
}: {
  side?: "left" | "right";
}) {
  return (
    <div
      className={`animate-wiggle-${side}`}
    >
      <Image
        src={kPublic.sideBtn}
        alt={"image"}
        width={150}
        height={122}
        style={{
          transform: side === "left" ? "scaleX(-1)" : undefined,
        }}
      />
    </div>
  );
}
