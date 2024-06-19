import Image from "next/image";
import { useInvitationDetailProvider } from "../hooks/use-invitation-detail";
import { concatBaseUrl } from "../utils/string-util";

export default function Background({ className }: { className?: string }) {
  const width = 100;
  const { innerHeight: height } = window;
  const { data } = useInvitationDetailProvider();

  return (
    <Image
      className={`check update absolute top-0 left-0 right-0 bottom-0 h-full w-[${width}px] ${className} object-cover overflow-hidden`}
      src={concatBaseUrl(data?.photo?.background)}
      width={width}
      height={height}
      alt="background"
    />
  );
}
