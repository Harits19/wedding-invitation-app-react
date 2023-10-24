"use client";

import { useGlobalState } from "@/app/hooks/useGlobalState";
import Icon from "../Icon";
import { IconName } from "../Icon/icons";
import { ReactNode } from "react";
import Home from "@/app/main/components/home";

export type MenuName = IconName;
export const menus: {
  name: MenuName;
  render: ReactNode;
}[] = [
  {
    name: "home",
    render: <Home />,
  },
  {
    name: "people",
    render: <Home />,
  },
  {
    name: "collections",
    render: <Home />,
  },
  {
    name: "place",
    render: <Home />,
  },
];

export default function Menu() {
  const { state, setState } = useGlobalState();
  const isMusicOn = state.music_on === true;
  return (
    <div className="absolute bottom-0 z-50 bg-ae814c m-8 flex flex-row rounded-full right-0 left-0 p-2 justify-between px-5 ">
      {[
        menus.map((e, index) => {
          const selectedMenu = false ?? state.activeMenu === e.name;

          return (
            <button
              key={index}
              onClick={() => {
                setState({
                  activeMenu: e.name,
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
  );
}
