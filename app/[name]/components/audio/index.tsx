import { useInvitationDetailProvider } from "../../hooks/use-invitation-detail";
import { concatBaseUrl } from "../../utils/string-util";
import { Button } from "../ui/button";
import { Label } from "../ui/label";

export default function MyAudio({ className }: { className?: string }) {
  const { setPlaying, playing, data } = useInvitationDetailProvider();

  return (
    <>
      <div className={className}>
        <Label>{concatBaseUrl(data?.music)}</Label>
        <br />
        <Button
          onClick={() => {
            setPlaying();
          }}
        >
          {playing ? "Stop" : "Play"}
        </Button>
      </div>
    </>
  );
}
