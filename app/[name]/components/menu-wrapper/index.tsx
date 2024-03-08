import { useGlobalState } from "@/app/[name]/hooks/use-global-state";
import { ReactNode } from "react";
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
