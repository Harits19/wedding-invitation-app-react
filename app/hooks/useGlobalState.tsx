"use client";

import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { MenuName } from "../components/menu";

export interface GlobalStateInterface {
  activeMenu?: MenuName;
  audio: HTMLAudioElement;
}

export const GlobalStateContext = createContext({
  state: {} as Partial<GlobalStateInterface>,
  setState: {} as Dispatch<SetStateAction<Partial<GlobalStateInterface>>>,
});

export const GlobalStateProvider = ({
  children,
  value = {
    audio:
      typeof Audio === "undefined"
        ? undefined
        : new Audio("/background-music.mp3"),
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
