import axios, { AxiosError } from "axios";
import { QueryKey, useQuery } from "react-query";
import { Wedding, ListWeddingRequest } from "@/app/model/list-wedding-model";
import { ResponseModel } from "@/app/model/response-model";
import { fetchGetListTemplate } from "@/app/api/fetch-get-list-weddinng";

export const useQueryGetListWedding = ({ apiKey }: ListWeddingRequest) => {
  return useQuery<
    Wedding[] | undefined,
    ResponseModel<undefined, undefined>,
    Wedding[] | undefined,
    string[]
  >({
    queryKey: ["useQueryGetListWedding", apiKey],
    queryFn: () => fetchGetListTemplate({ apiKey }),
  });
};
