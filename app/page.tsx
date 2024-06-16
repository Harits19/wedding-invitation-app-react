"use client";

import { useState } from "react";
import CoverPage from "./components/cover-page";
import WelcomePage from "./components/welcome-page";
import { WeddingContext } from "./hooks/useWeddingProvider";
import MusicControl from "./components/music-control";

export default function Page() {
  const [showCover, setShowCover] = useState(true);
  const [musicIsPlaying, setMusicIsPlaying] = useState(false);

  return (
    <WeddingContext.Provider
      value={{
        setShowCover,
        showCover,
        musicIsPlaying,
        setMusicIsPlaying,
      }}
    >
      <div className="bg-gray-50   w-screen h-screen flex flex-row justify-center">
        <div className="flex flex-col relative w-mobile overflow-y-scroll h-screen">
          {showCover && <CoverPage />}
          <WelcomePage />

          <div className="fixed bottom-0">
            <MusicControl />
          </div>
        </div>
      </div>
    </WeddingContext.Provider>
  );
}
