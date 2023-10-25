import { kText } from "@/constans/text";
import moment from "moment";

export default function DateText() {
  return <>{moment(kText.date).format("dddd, DD MMMM YYYY")}</>;
}
