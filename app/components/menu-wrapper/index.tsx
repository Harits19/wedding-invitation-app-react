import { useGlobalState } from "@/app/hooks/useGlobalState";
import { IconName } from "../Icon/icons";
import { ReactNode, RefObject } from "react";
import { useDebounceFunc } from "@/app/hooks/useDebounce";

export type MenuName = IconName;

export default function MenuWrapper({
  children,
  name,
}: {
  children?: ReactNode;
  name: string;
}) {
  return <div id={name}>{children}</div>;
}
