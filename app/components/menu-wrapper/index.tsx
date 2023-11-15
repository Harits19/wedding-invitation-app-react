import { useGlobalState } from "@/app/hooks/useGlobalState";
import { IconName } from "../Icon/icons";
import { ReactNode, RefObject, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import useDebounce, { useDebounceFunc } from "@/app/hooks/useDebounce";

export type MenuName = IconName;

export default function MenuWrapper({
  menuIndex,
  children,
}: {
  menuIndex: number;
  children?: ReactNode;
}) {
  const { state, setState } = useGlobalState();
  const ref = useRef<HTMLDivElement>(null);
  const debounce = useDebounceFunc();
  const { ref: inViewRef, inView,  } = useInView({
    delay: 300,
    onChange: (inView) => {
      // if (inView) {
      //   setState({
      //     activeMenu: menuIndex,
      //   });
      // }
    },
  });

  useEffect(() => {
    if (menuIndex === state.activeMenu) {
      ref.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [menuIndex, state.activeMenu, debounce]);

  return (
    <div ref={ref}>
      <div key={JSON.stringify(inView)} ref={inViewRef}>
        {children}
      </div>
    </div>
  );
}
