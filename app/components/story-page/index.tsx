import { useText } from "@/app/hooks/useText";
import Background2 from "../background-2";
import { FaRegHeart } from "react-icons/fa";
import InViewWrapper from "../inview-wrapper";

export default function StoryPage() {
  const text = useText();
  return (
    <Background2>
      <div className="flex flex-col h-full items-center justify-center font-cardo text-black">
        <InViewWrapper className="text-[37px] animate-fade-in-bottom-top">{text.loveStory.title}</InViewWrapper>
        {text.loveStory.value.map((item, index) => {
          const Line = () => <div className="bg-black h-0.5 flex flex-1" />;
          const Separator = () => (
            <div className="flex flex-row w-full items-center gap-x-2 ">
              <Line />
              <FaRegHeart />
              <Line />
            </div>
          );
          return (
            <div key={index}>
              {index !== 0 ? <Separator /> : <div />}
              <InViewWrapper className="font-poppins text-[10px] my-4 animate-fade-in-top-bottom">
                <div className="font-cardo font-bold">{item.date}</div>
                <br />
                <div>{item.text}</div>
              </InViewWrapper>
            </div>
          );
        })}
      </div>
    </Background2>
  );
}
