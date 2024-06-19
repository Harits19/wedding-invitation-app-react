"use client";

import { useEffect, useMemo, useState } from "react";
import CoverPage from "./components/cover-page";
import WelcomePage from "./components/welcome-page";
import { WeddingContext } from "./hooks/useWeddingProvider";
import MusicControl from "./components/music-control";
import { kPublic } from "./constans/public";

export default function Page() {
  const [showCover, setShowCover] = useState(true);
  const [musicIsPlaying, setMusicIsPlaying] = useState(false);
  const audio = useMemo(
    () => new Audio(kPublic.backgroundMusic),
    [],
  );

  useEffect(() => {
    audio.loop = true;
    return () => {
      audio.pause();
    };
  }, [audio]);

  useEffect(() => {
    if (musicIsPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
  }, [audio, musicIsPlaying]);

  return (
    <WeddingContext.Provider
      value={{
        setShowCover: (value) => {
          setShowCover(value);
          if (value === false) {
            setMusicIsPlaying(true);
          }
        },
        showCover,
        musicIsPlaying,
        setMusicIsPlaying,
      }}
    >
      <div className="bg-gray-50   w-screen h-screen flex flex-row justify-center font-cormorant">
        <div className="flex flex-col relative w-mobile overflow-y-scroll h-screen">
          <CoverPage />
          <WelcomePage />

          {!showCover && (
            <div className="fixed  flex flex-row justify-end w-mobile bottom-0">
              <MusicControl />
            </div>
          )}
        </div>
      </div>
    </WeddingContext.Provider>
  );
}
