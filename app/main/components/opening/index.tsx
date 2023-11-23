import Div from "@/app/components/div";
import Background from "@/app/components/background";
import BottomDecor from "@/app/components/bottom-decor";
import Carousel from "@/app/components/carousel";
import CountDown from "@/app/components/count-down";
import DateText from "@/app/components/date-text";
import Scaffold from "@/app/components/scaffold";
import TopDecor from "@/app/components/top-decor";
import { kPublic } from "@/constans/public";
import { kText } from "@/constans/text";
import moment from "moment";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useGlobalState } from "@/app/hooks/useGlobalState";
import useDeselectMenu from "@/app/hooks/useDeselectMenu";

export default function Opening() {
  const imageList = [kPublic.photoSlideShow1, kPublic.photoSlideShow2];
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
              <Image className="h-[450px] object-cover" alt="image" src={val} />
            )}
          />
        </div>

        <div className="absolute z-50 top-0 left-0 right-0 bottom-0 justify-center flex flex-col items-center">
          <div className="h-1/3" />
          <Div className="text-2xl" family="berkshire">
            {kText.name}
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
