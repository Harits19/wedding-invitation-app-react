"use client";

import { createContext, ReactNode, useContext, useState } from "react";

export interface TokenState {
  token?: string;
  // eslint-disable-next-line no-unused-vars
  setToken: (newValue: string) => void;
}

export const TokenContext = createContext<TokenState>({
  setToken: () => {},
});

export const useTokenState = () => useContext(TokenContext);

export const TokenProvider = (props: { children: ReactNode }) => {
  const [token, setToken] = useState<string>();

  return (
    <TokenContext.Provider
      value={{
        token,
        setToken,
      }}
    >
      {props.children}
    </TokenContext.Provider>
  );
};
