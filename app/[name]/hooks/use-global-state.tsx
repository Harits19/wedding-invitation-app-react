"use client";

import React, {
  Dispatch,
  RefObject,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { MenuName } from "../components/menu";

export interface GlobalStateInterface {
  activeMenu?: MenuName;
  audioPlay: boolean;
  audioRef: RefObject<HTMLAudioElement>;
  apiKey?: string;
}

export const GlobalStateContext = createContext({
  state: {} as Partial<GlobalStateInterface>,
  setState: {} as Dispatch<SetStateAction<Partial<GlobalStateInterface>>>,
});

export const GlobalStateProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const value: Partial<GlobalStateInterface> = {
    audioPlay: false,
  };
  const [state, setStateBase] = useState(value);
  const setState = (
    newValue: SetStateAction<Partial<GlobalStateInterface>>,
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
