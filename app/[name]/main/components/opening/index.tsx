import Div from "@/app/[name]/components/div";
import Background from "@/app/[name]/components/background";
import BottomDecor from "@/app/[name]/components/bottom-decor";
import Carousel from "@/app/[name]/components/carousel";
import CountDown from "@/app/[name]/components/count-down";
import DateText from "@/app/[name]/components/date-text";
import Scaffold from "@/app/[name]/components/scaffold";
import TopDecor from "@/app/[name]/components/top-decor";
import Image from "next/image";
import useDeselectMenu from "@/app/[name]/hooks/use-deselect-menu";
import { useInvitationDetailProvider } from "@/app/[name]/hooks/use-invitation-detail";
import { concatBaseUrl } from "@/app/[name]/utils/string-util";
import { kSize } from "@/app/constans/size";

export default function Opening() {
  const { data } = useInvitationDetailProvider();
  const imageList = (data?.photo?.slide ?? []).map((image) =>
    concatBaseUrl(image),
  );
  const ref = useDeselectMenu();

  return (
    <Scaffold>
      <div ref={ref} className="flex flex-col min-h-screen">
        <Background className="z-20" />
        <div className="absolute z-20 right-0 left-0">
          <TopDecor />
        </div>

        <div className="absolute top-0 w-full">
          <Carousel
            imageList={imageList}
            renderItem={(val) => (
              <Image
                className="h-[450px] object-cover"
                alt="image"
                src={val}
                height={450}
                width={kSize.max.window.width}
              />
            )}
          />
        </div>

        <div className="absolute z-50 top-0 left-0 right-0 bottom-0 justify-center flex flex-col items-center">
          <div className="h-1/3" />
          <Div className="text-2xl" family="berkshire">
            {data.name}
          </Div>
          <Div className="text-base" family="averia">
            <DateText />
          </Div>

          <br />
          <CountDown />
        </div>

        <div className="z-20 absolute bottom-0 left-0 right-0">
          <BottomDecor />
        </div>
      </div>
    </Scaffold>
  );
}
