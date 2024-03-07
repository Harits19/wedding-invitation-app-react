import useSWR from "swr";
import {
  InvitationResponse,
  InvitationResponseModel,
} from "../model/invitation-model";
import { useAxios } from "./use-axios";
import { ReactNode, createContext } from "react";

export const useInvitationDetail = (name: string) => {
  const axios = useAxios();
  const fetcher = (url: string) =>
    axios.get<InvitationResponseModel>(url).then((res) => res.data.data);
  return useSWR(`/invitation/${name}`, fetcher);
};

export const InvitationDetailContext = createContext<
  InvitationResponse | undefined
>(undefined);

export const InvitationDetailProvider = ({
  children,
  name,
}: {
  children: ReactNode;
  name: string;
}) => {
  const { data, error, isLoading } = useInvitationDetail(name);

  if (isLoading) {
    return <div>isLoading</div>;
  }

  if (error) {
    return <div>{error || JSON.stringify(error)}</div>;
  }

  return (
    <InvitationDetailContext.Provider value={data}>
      {children}
    </InvitationDetailContext.Provider>
  );
};
