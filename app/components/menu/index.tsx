"use client";

import { useGlobalState } from "@/app/hooks/useGlobalState";
import Icon from "../Icon";
import { IconName } from "../Icon/icons";
import { ReactNode } from "react";
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
  const isMusicOn = state.music_on === true;
  const { width } = kSize.max.window;
  return (
    <div className="fixed bottom-0 flex flex-row justify-center  right-0 left-0 items-stretch ">
      <div className=" bg-driftwood m-8 flex flex-row rounded-full p-2 justify-between px-5 flex-1 bg-opacity-80 shadow-2xl  max-w-[296px]">
        {[
          menus.map((e, index) => {
            const selectedMenu = false ?? state.activeMenu === index;

            return (
              <button
                key={index}
                onClick={() => {
                  setState({
                    activeMenu: index,
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
            setState({
              music_on: !isMusicOn,
            });
          }}
        >
          <Icon name={isMusicOn ? "music" : "music_off"} />
        </button>
      </div>
    </div>
  );
}
