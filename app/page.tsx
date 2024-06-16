"use client";

import { useState } from "react";
import CoverPage from "./components/cover-page";
import WelcomePage from "./components/welcome-page";
import { WeddingContext } from "./hooks/useWeddingProvider";

export default function Page() {
  const [showCover, setShowCover] = useState(false);
  return (
    <WeddingContext.Provider
      value={{
        setShowCover,
        showCover,
      }}
    >
      <div className="bg-gray-50   w-screen h-screen flex flex-row justify-center">
        <div className="flex flex-col relative w-mobile">
          {showCover && <CoverPage />}
          <WelcomePage />
        </div>
      </div>
    </WeddingContext.Provider>
  );
}
