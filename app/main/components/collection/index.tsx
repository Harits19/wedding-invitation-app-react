import TextDiv from "@/app/components/div";
import MenuWrapper from "@/app/components/menu-wrapper";
import Scaffold from "@/app/components/scaffold";
import { kPublic } from "@/constans/public";
import { kText } from "@/constans/text";
import Image from "next/image";

export default function Collection() {
  const listImage = [kPublic.photoGallery1, kPublic.photoGallery2];
  return (
    <Scaffold className="items-center">
      <TextDiv family="berkshire" className="text-3xl">
        {kText.ourGallery}
      </TextDiv>
      <div className="h-[100px]" />
      {listImage.map((e) => (
        <Image
          key={e.src}
          alt="image 1"
          objectFit="cover"
          className="max-w-360 h-[360px] object-cover p-1  rounded-lg"
          src={e}
        />
      ))}
      <div className="h-12" />
    </Scaffold>
  );
}
