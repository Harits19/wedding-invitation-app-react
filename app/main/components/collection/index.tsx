import Div from "@/app/components/div";
import Scaffold from "@/app/components/scaffold";
import { kPublic } from "@/constans/public";
import { kText } from "@/constans/text";
import Image from "next/image";

export default function Collection() {
  const listImage = [kPublic.photoGallery1, kPublic.photoGallery2];
  return (
    <Scaffold className="items-center">
      <Div family="berkshire" className="text-3xl">
        {kText.ourGallery}
      </Div>
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
