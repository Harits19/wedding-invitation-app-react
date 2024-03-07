import { useInvitationDetailProvider } from "../../hooks/use-invitation-detail";
import { Input } from "../ui/input";

export default function UpdateView() {
  const { data, setInitialName } = useInvitationDetailProvider();
  return (
    <div className="flex flex-1 flex-col">
      <Input
        value={data?.initial}
        onChange={(val) => {
          setInitialName(val.target.value);
        }}
      />
    </div>
  );
}
