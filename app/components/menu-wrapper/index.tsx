import { useGlobalState } from "@/app/hooks/use-global-state";
import { IconName } from "../Icon/icons";
import { ReactNode, RefObject } from "react";
import { useDebounceFunc } from "@/app/hooks/use-debounce";
import { useInView } from "react-intersection-observer";
import { MenuName } from "../menu";

export default function MenuWrapper({
  children,
  name,
}: {
  children?: ReactNode;
  name: MenuName;
}) {
  const { setState } = useGlobalState();
  const { ref } = useInView({
    rootMargin: "-10px 0px -10px 0px",
    onChange: (inView) => {
      if (inView) {
        console.log({ inView, name });
        setState({ activeMenu: name });
      }
    },
  });
  return (
    <div ref={ref} id={name}>
      {children}
    </div>
  );
}
