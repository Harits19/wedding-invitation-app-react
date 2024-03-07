"use client";

import Cover from "../components/cover";
import Menu, { menus } from "../components/menu";
import MenuWrapper from "../components/menu-wrapper";
import UpdateView from "../components/update-view";
import Closing from "./components/closing";
import Opening from "./components/opening";

export default function Main() {
  const isEditFlow = true;

  return (
    <div className=" relative flex flex-row justify-center items-center ">
      {!isEditFlow ? (
        <div className="flex flex-1 bg-slate-50 h-screen" />
      ) : (
        <div />
      )}
      <div className="w-[360px] ">
        <Cover>
          <div className="relative">
            <div className=" absolute z-[100] bottom-0  right-0 left-0 flex flex-row justify-center items-center p-4">
              <Menu />
            </div>
            <div className="relative  h-screen overflow-y-scroll flex flex-col">
              <div className="h-screen">
                <Opening />
              </div>
              {[
                menus.map((e, i) => (
                  <MenuWrapper name={e.name} key={i}>
                    {e.render}
                  </MenuWrapper>
                )),
              ]}
              <div className="h-screen">
                <Closing />
              </div>
            </div>
          </div>
        </Cover>
      </div>

      <div className="flex flex-1 bg-slate-50 h-screen p-4">
        {isEditFlow ? <UpdateView /> : <div />}
      </div>
    </div>
  );
}
