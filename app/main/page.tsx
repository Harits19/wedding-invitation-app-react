"use client";

import { menus } from "../components/menu";
import MenuWrapper from "../components/menu-wrapper";

export default function Main() {
  return (
    <div className="overflow-y-scroll">
      {[
        menus.map((e, i) => (
          <MenuWrapper key={i} menuName={e.name}>
            {e.render}
          </MenuWrapper>
        )),
      ]}
    </div>
  );
}
