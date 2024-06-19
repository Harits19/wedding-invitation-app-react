import { useWeddingState } from "@/app/hooks/useWeddingProvider";
import { FaMicrophoneAltSlash, FaMusic } from "react-icons/fa";

export default function MusicControl() {
  const { musicIsPlaying, setMusicIsPlaying } = useWeddingState();
  const IconControl = musicIsPlaying ? FaMusic : FaMicrophoneAltSlash;
  return (
    <div className="border-2 mb-20 border-#E97777C7 bg-white rounded p-1 flex flex-col h-min">
      <IconControl
        className=" text-[16px]  text-#E97777C7"
        onClick={() => {
          setMusicIsPlaying(!musicIsPlaying);
        }}
      />
    </div>
  );
}
