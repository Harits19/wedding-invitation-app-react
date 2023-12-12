import axios, { AxiosError } from "axios";
import { QueryKey, useQuery } from "react-query";
import { ResponseModel } from "@/app/model/response-model";
import { useFetchGetListTemplate } from "@/app/api/use-fetch-get-list-weding";
import { Wedding } from "@/app/model/list-wedding-response-model";
import { useGlobalState } from "@/app/hooks/useGlobalState";

export const useQueryGetListWedding = () => {
  const { state } = useGlobalState();
  const apiKey = state.apiKey ?? "";
  return useQuery<
    Wedding[] | undefined,
    ResponseModel,
    Wedding[] | undefined,
    string[]
  >({
    queryKey: ["useQueryGetListWedding", apiKey],
    queryFn: useFetchGetListTemplate,
    enabled: Boolean(apiKey),
  });
};
