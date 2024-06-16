import { useWeddingState } from "@/app/hooks/useWeddingProvider";
import { FaMusic, FaStopCircle } from "react-icons/fa";

export default function MusicControl() {
  const { musicIsPlaying, setMusicIsPlaying } = useWeddingState();
  const IconControl = musicIsPlaying ? FaStopCircle : FaMusic;
  return (
    <IconControl
      className=" text-[32px] ml-4 mb-6 text-#717E74"
      onClick={() => {
        setMusicIsPlaying(!musicIsPlaying);
      }}
    />
  );
}
