"use client";

import { menus } from "../components/menu";
import MenuWrapper from "../components/menu-wrapper";
import Home from "./components/home";
import Opening from "./components/opening";

export default function Main() {
  return (
    <div className="overflow-hidden">
      <Opening />
      {[
        menus.map((e, i) => (
          <MenuWrapper key={i} menuIndex={i}>
            {e.render}
          </MenuWrapper>
        )),
      ]}
      <div className="h-20" />
    </div>
  );
}
