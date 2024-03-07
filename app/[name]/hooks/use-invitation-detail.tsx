import useSWR from "swr";
import {
  InvitationResponse,
  InvitationResponseModel,
} from "../model/invitation-model";
import { useAxios } from "./use-axios";
import { ReactNode, createContext, useContext } from "react";
import { AxiosError } from "axios";

export const useInvitationDetail = (name: string) => {
  const axios = useAxios();
  const fetcher = (url: string) =>
    axios.get<InvitationResponseModel>(url).then((res) => res.data.data);
  return useSWR(`/invitation/${name}`, fetcher);
};

export const InvitationDetailContext = createContext<
  InvitationResponse | undefined
>(undefined);

export const useInvitationDetailState = () =>
  useContext(InvitationDetailContext);

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
    if (error instanceof AxiosError) {
      return (
        <div>
          {error.response?.status}
          <br />
          {JSON.stringify(error.response?.data)}
        </div>
      );
    }
    return <div>{error.toString() || JSON.stringify(error)}</div>;
  }

  return (
    <InvitationDetailContext.Provider value={data}>
      {children}
    </InvitationDetailContext.Provider>
  );
};
