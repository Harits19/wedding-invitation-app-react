import AudioPlayer from "@/app/components/audio-player";
import Text from "@/app/components/averia";
import Background from "@/app/components/background";
import BottomDecor from "@/app/components/bottom-decor";
import Carousel from "@/app/components/carousel";
import CountDown from "@/app/components/count-down";
import Scaffold from "@/app/components/scaffold";
import TopDecor from "@/app/components/top-decor";
import { kPublic } from "@/constans/public";
import { kText } from "@/constans/text";
import moment from "moment";
import Image from "next/image";

export default function Home() {
  const imageList = [kPublic.photoSlideShow1, kPublic.photoSlideShow2];

  return (
    <Scaffold>
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

      <div className="absolute z-50 top-0 left-0 right-0 bottom-0 flex flex-col items-center">
        <Image
          className=" opacity-0 h-[400px] object-cover"
          alt="photo"
          height={400}
          src={imageList[0]}
        />
        <Text className="text-2xl" family="berkshire">
          {kText.name}
        </Text>
        <Text className="text-base" family="averia">
          {moment(kText.date).format("dddd, DD MMMM YYYY")}
        </Text>

        <AudioPlayer src={"/background-music.mp4"} />

        <br />
        <CountDown />
      </div>

      <div className="z-20 absolute bottom-0 left-0 right-0">
        <BottomDecor />
      </div>
    </Scaffold>
  );
}
