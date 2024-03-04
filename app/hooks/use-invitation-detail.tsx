import useSWR from "swr";
import { InvitationResponseModel } from "../model/invitation-model";
import { useAxios } from "./use-axios";

export const useInvitationDetail = (name: string) => {
  const axios = useAxios();
  const fetcher = (url: string) =>
    axios.get<InvitationResponseModel>(url).then((res) => res.data.data);
  return useSWR(`/invitation/${name}`, fetcher);
};
