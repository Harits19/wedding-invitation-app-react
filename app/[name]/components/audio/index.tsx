import { useInvitationDetailProvider } from "../../hooks/use-invitation-detail";

export default function MyAudio({ className }: { className?: string }) {
  const { setPlaying, playing } = useInvitationDetailProvider();

  return (
    <>
      <button
        className={className}
        onClick={() => {
          setPlaying();
        }}
      >
        {playing ? "Stop" : "Play"}
      </button>
    </>
  );
}
