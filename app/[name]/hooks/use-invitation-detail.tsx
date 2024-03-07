import useSWR from "swr";
import {
  InvitationResponse,
  InvitationResponseModel,
} from "../model/invitation-model";
import { useAxios } from "./use-axios";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { AxiosError } from "axios";

// const invitationDetailAction = (

export interface InvitationDetailState {
  state?: InvitationResponse;
  setState?: Dispatch<SetStateAction<InvitationResponse>>;
}

export const InvitationDetailContext = createContext<InvitationDetailState>({});

export const useInvitationDetailProvider = () => {
  const { setState, state } = useContext(InvitationDetailContext);

  return {
    data: state,
    setInitialName: (value: string) => {
      setState?.((prev) => {
        return {
          ...prev,
          initial: value,
        };
      });
    },
    setStateAll: setState,
  };
};

export const InvitationDetailProvider = ({
  children,
  name,
}: {
  children: ReactNode;
  name: string;
}) => {
  const axios = useAxios();
  const fetcher = (url: string) =>
    axios.get<InvitationResponseModel>(url).then((res) => res.data.data);

  const { data, error, isLoading } = useSWR(`/invitation/${name}`, fetcher);

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

  if (!data) return <div>Data empty</div>;
  return (
    <InvitationDetailContextView data={data}>
      {children}
    </InvitationDetailContextView>
  );
};

const InvitationDetailContextView = ({
  data,
  children,
}: {
  data: InvitationResponse;
  children: ReactNode;
}) => {
  const [state, setState] = useState(data);

  return (
    <InvitationDetailContext.Provider
      value={{
        state: state,
        setState,
      }}
    >
      {children}
    </InvitationDetailContext.Provider>
  );
};
