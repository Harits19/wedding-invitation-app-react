import { useInView } from "react-intersection-observer";
import { useGlobalState } from "./useGlobalState";



export default function useDeselectMenu(){

  const { setState } = useGlobalState();

  const { ref } = useInView({
    rootMargin: "-10px 0px -10px 0px",
    onChange: (inView) => {
      if (inView) {
        setState({ activeMenu: undefined });
      }
    },
  });

  return ref;
}