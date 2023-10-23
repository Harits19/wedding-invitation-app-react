import { useState, useRef, useEffect } from "react";

export default function AudioPlayer({ src }: { src: string }) {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = new Audio(src);
    audio.play();
  }, [src]);
  // useEffect(() => {
  //   audioRef.current?.play();
  // }, []);

  return <>{/* <audio ref={audioRef} src={src} onLoad={() => {}} /> */}</>;
}
