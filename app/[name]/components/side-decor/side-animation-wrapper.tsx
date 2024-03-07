import { ReactNode } from "react";

export type Position = "left" | "right";

export default function SideAnimationWrapper({
  side = "left",
  ...props
}: {
  side?: Position;
  children: ReactNode;
}) {
  return (
    <div
      className={`${
        side === "left" ? "animate-wiggle-left" : "animate-wiggle-right"
      }`}
    >
      <div className={`${side === "left" ? "-scale-x-100" : ""}`}>
        {props.children}
      </div>
    </div>
  );
}
