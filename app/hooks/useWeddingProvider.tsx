/* eslint-disable no-unused-vars */
import { createContext, useContext } from "react";

export interface WeddingState {
  showCover: boolean;
  setShowCover: (value: boolean) => void;
}

export const WeddingContext = createContext<WeddingState>({
  setShowCover: () => {},
  showCover: true,
});

export const useWeddingState = () => {
  return useContext(WeddingContext);
};
