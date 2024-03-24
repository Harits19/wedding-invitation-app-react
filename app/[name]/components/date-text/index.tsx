import moment from "moment";
import { useInvitationDetailProvider } from "../../hooks/use-invitation-detail";

export default function DateText() {
  const {
    data: { date },
  } = useInvitationDetailProvider();

  return <>{moment(date).format("dddd, DD MMMM YYYY")}</>;
}
