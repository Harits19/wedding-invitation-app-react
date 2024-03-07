"use client";

import { useGlobalState } from "@/app/[name]/hooks/use-global-state";
import Icon from "../Icon";
import { IconName } from "../Icon/icons";
import { ReactNode } from "react";
import People from "@/app/[name]/main/components/people";
import Collection from "@/app/[name]/main/components/collection";
import Place from "@/app/[name]/main/components/place";
import Home from "@/app/[name]/main/components/home";
import { useInvitationDetailProvider } from "../../hooks/use-invitation-detail";

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
  const {
    state: { ...state },
  } = useGlobalState();

  const { setPlaying, playing } = useInvitationDetailProvider();

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
            setPlaying?.();
          }}
        >
          <Icon name={playing ? "music" : "music_off"} />
        </button>
      </div>
    </div>
  );
}
