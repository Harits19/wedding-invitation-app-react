"use client";

import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { IconName } from "../components/Icon/icons";

export interface GlobalStateInterface {
  activeMenu: IconName;
  music_on: boolean;
}

export const GlobalStateContext = createContext({
  state: {} as Partial<GlobalStateInterface>,
  setState: {} as Dispatch<SetStateAction<Partial<GlobalStateInterface>>>,
});

export const GlobalStateProvider = ({
  children,
  value = {
    activeMenu: "home",
    music_on: true,
  } as GlobalStateInterface,
}: {
  children: React.ReactNode;
  value?: Partial<GlobalStateInterface>;
}) => {
  const [state, setStateBase] = useState(value);
  const setState = (
    newValue: SetStateAction<Partial<GlobalStateInterface>>
  ) => {
    setStateBase((prev) => ({
      ...prev,
      ...newValue,
    }));
  };
  return (
    <GlobalStateContext.Provider value={{ state, setState }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = () => {
  const context = useContext(GlobalStateContext);
  if (!context) {
    throw new Error("useGlobalState must be used within a GlobalStateContext");
  }
  return context;
};
