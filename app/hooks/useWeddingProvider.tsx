/* eslint-disable no-unused-vars */
import { createContext, useContext } from "react";

export interface WeddingState {
  showCover: boolean;
  musicIsPlaying: boolean;
  setMusicIsPlaying: (value: boolean) => void;
  setShowCover: (value: boolean) => void;
}

export const WeddingContext = createContext<WeddingState>({
  setShowCover: () => {},
  showCover: true,
  musicIsPlaying: true,
  setMusicIsPlaying: () => {},
});

export const useWeddingState = () => {
  return useContext(WeddingContext);
};
