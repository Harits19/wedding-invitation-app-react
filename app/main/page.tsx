"use client";

import { RefObject, createRef, useEffect, useState } from "react";
import Menu, { menus } from "../components/menu";
import MenuWrapper from "../components/menu-wrapper";
import Scaffold from "../components/scaffold";
import Closing from "./components/closing";
import Home from "./components/home";
import Opening from "./components/opening";

const elRefs = menus.map((e, i) => createRef<HTMLDivElement>());

export default function Main() {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <div className="absolute top-0 bottom-0 left-0 right-0 z-0 overflow-y-scroll">
        <div className="overflow-hidden">
          <Opening />
          {[
            menus.map((e, i) => (
              <MenuWrapper key={i} menuIndex={i} ref={elRefs[i]}>
                {e.render}
              </MenuWrapper>
            )),
          ]}
          <Closing />
        </div>
      </div>
      <Menu refs={elRefs} />
    </div>
  );
}
