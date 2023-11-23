import { useGlobalState } from "@/app/hooks/useGlobalState";
import { IconName } from "../Icon/icons";
import { ReactNode, RefObject } from "react";
import { useDebounceFunc } from "@/app/hooks/useDebounce";

export type MenuName = IconName;

export default function MenuWrapper({
  menuIndex,
  children,
  ref,
}: {
  menuIndex: number;
  children?: ReactNode;
  ref: RefObject<HTMLDivElement>;
}) {
  const { state, setState } = useGlobalState();
  // const ref = useRef<HTMLDivElement>(null);
  const debounce = useDebounceFunc();

  // useEffect(() => {
  //   if (menuIndex === state.activeMenu) {
  //     ref.current?.scrollIntoView({ behavior: "auto" });
  //   }
  // }, [menuIndex, state.activeMenu, debounce]);

  return <div ref={ref}>{children}</div>;
}
