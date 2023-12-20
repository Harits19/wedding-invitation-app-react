import axios, { AxiosError } from "axios";
import { useQuery } from "react-query";
import { ResponseModel } from "@/app/model/response-model";
import { useFetchGetListTemplate } from "@/app/api/use-fetch-get-list-weding";
import { Wedding } from "@/app/model/list-wedding-response-model";
import { useGlobalState } from "@/app/hooks/useGlobalState";
import { useMyQuery } from "@/app/hooks/use-my-query";

export const useQueryGetListWedding = () => {
  const { state } = useGlobalState();
  const apiKey = state.apiKey ?? "";
  return useMyQuery<
    Wedding[] | undefined,
    ResponseModel,
    Wedding[] | undefined
  >({
    queryKey: ["useQueryGetListWedding", apiKey],
    queryFn: useFetchGetListTemplate,
    enabled: Boolean(apiKey),
  });
};
