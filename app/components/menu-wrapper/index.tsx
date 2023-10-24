import { useGlobalState } from "@/app/hooks/useGlobalState";
import { IconName } from "../Icon/icons";
import { ReactNode, useEffect, useRef } from "react";

export type MenuName = IconName;

export default function MenuWrapper({
  menuName,
  children,
}: {
  menuName: MenuName;
  children?: ReactNode;
}) {
  const { state } = useGlobalState();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (menuName !== undefined && menuName === state.activeMenu) {
      ref.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [menuName, state.activeMenu]);

  return <div ref={ref}>{children}</div>;
}
