"use client";

import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { MenuName } from "../components/menu";
import { useInvitationDetailProvider } from "./use-invitation-detail";
import { concatBaseUrl } from "../utils/string-util";

export interface GlobalStateInterface {
  activeMenu?: MenuName;
  audio: HTMLAudioElement;
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
  const { data } = useInvitationDetailProvider()
  const value: Partial<GlobalStateInterface> = {
    audio:
      typeof Audio === "undefined" && !data?.music
        ? undefined
        : new Audio(concatBaseUrl(data?.music)),
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
