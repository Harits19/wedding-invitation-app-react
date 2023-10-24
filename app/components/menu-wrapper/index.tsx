import { useGlobalState } from "@/app/hooks/useGlobalState";
import { IconName } from "../Icon/icons";
import { ReactNode, useEffect, useRef } from "react";

export type MenuName = IconName;

export default function MenuWrapper({
  menuIndex,
  children,
}: {
  menuIndex: number;
  children?: ReactNode;
}) {
  const { state } = useGlobalState();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (menuIndex !== undefined && menuIndex === state.activeMenu) {
      ref.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [menuIndex, state.activeMenu]);

  return <div ref={ref}>{children}</div>;
}
