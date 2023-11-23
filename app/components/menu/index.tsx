"use client";

import { useGlobalState } from "@/app/hooks/useGlobalState";
import Icon from "../Icon";
import { IconName } from "../Icon/icons";
import { ReactNode, RefObject, useEffect, useState } from "react";
import People from "@/app/main/components/people";
import Collection from "@/app/main/components/collection";
import Place from "@/app/main/components/place";
import Home from "@/app/main/components/home";
import { kSize } from "@/constans/size";

export type MenuName = IconName;
export const menus: {
  name: MenuName;
  render?: ReactNode;
}[] = [
  {
    name: "home",
    render: <Home />,
  },
  {
    name: "people",
    render: <People />,
  },
  {
    name: "place",
    render: <Place />,
  },
  {
    name: "collections",
    render: <Collection />,
  },
];

export default function Menu() {
  const { state, setState } = useGlobalState();
  const [play, setPlay] = useState(true);
  const audio = state.audio;
  useEffect(() => {
    if (audio) {
      audio.play();
      audio.loop = true;
      const handlePausePlay = () => {
        setPlay((prev) => !prev);
      };

      audio.addEventListener("pause", handlePausePlay);
      audio.addEventListener("play", handlePausePlay);
      return () => {
        audio.currentTime = 0;
        audio.pause();
        audio.removeEventListener("pause", handlePausePlay);
        audio.removeEventListener("play", handlePausePlay);
      };
    }
  }, []);

  const { width } = kSize.max.window;
  return (
    <div className="fixed bottom-0 flex flex-row justify-center  right-0 left-0 items-stretch ">
      <div className=" bg-driftwood m-8 flex flex-row rounded-full p-2 justify-between px-5 flex-1 bg-opacity-80 shadow-2xl  max-w-[296px]">
        {[
          menus.map((e, index) => {
            const selectedMenu = state.activeMenu === e.name;

            return (
              <button
                key={index}
                onClick={() => {
                  document?.getElementById?.(e.name)?.scrollIntoView({
                    behavior: "smooth",
                    block: "end",
                    inline: "nearest",
                  });
                }}
              >
                <Icon
                  key={index}
                  name={e.name}
                  fill={selectedMenu ? "white" : undefined}
                />
              </button>
            );
          }),
        ]}
        <button
          onClick={() => {
            if (!play) {
              state.audio?.pause();
            } else {
              state.audio?.play();
            }
          }}
        >
          <Icon name={!play ? "music" : "music_off"} />
        </button>
      </div>
    </div>
  );
}
