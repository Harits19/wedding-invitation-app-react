"use client";

import { menus } from "../components/menu";
import MenuWrapper from "../components/menu-wrapper";
import Opening from "./components/opening";

export default function Main() {
  return (
    <div className="overflow-y-scroll">
      <Opening />
      {[
        menus.map((e, i) => (
          <MenuWrapper key={i} menuIndex={i}>
            {e.render}
          </MenuWrapper>
        )),
      ]}
    </div>
  );
}
