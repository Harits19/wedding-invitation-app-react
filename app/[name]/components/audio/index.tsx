import { useEffect, useMemo, useState } from "react";
import { useInvitationDetailProvider } from "../../hooks/use-invitation-detail";
import { concatBaseUrl } from "../../utils/string-util";

export default function MyAudio({ className }: { className?: string }) {
  const [playing, setPlaying] = useState(false);
  const { data } = useInvitationDetailProvider();
  const music = data?.music;
  const musicLocal = data?.musicLocal;
  const audio = useMemo(() => {
    return new Audio(
      musicLocal ? URL.createObjectURL(musicLocal) : concatBaseUrl(music),
    );
  }, [music, musicLocal]);

  useEffect(() => {
    return () => {
      setPlaying(false);
      audio.pause();
    };
  }, [audio]);

  return (
    <>
      <button
        className={className}
        onClick={() => {
          const newValue = !playing;
          if (newValue) {
            audio.play();
          } else {
            audio.pause();
          }
          setPlaying(newValue);
        }}
      >
        {playing ? "Stop" : "Play"}
      </button>
    </>
  );
}
