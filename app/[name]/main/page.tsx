"use client";

import Menu, { menus } from "../components/menu";
import MenuWrapper from "../components/menu-wrapper";
import Closing from "./components/closing";
import Opening from "./components/opening";

export default function Main() {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <div className="absolute top-0 bottom-0 left-0 right-0 z-0 overflow-y-scroll">
        <div className="overflow-hidden">
          <Opening />
          {[
            menus.map((e, i) => (
              <MenuWrapper name={e.name} key={i}>
                {e.render}
              </MenuWrapper>
            )),
          ]}
          <Closing />
        </div>
      </div>
      <Menu />
    </div>
  );
}
