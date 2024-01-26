import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { useGlobalState } from "./use-global-state";

export default function useFetch<
  TData = unknown,
  TResponse = AxiosResponse<TData>,
  TBody = unknown
>(config: AxiosRequestConfig<TBody>) {
  // const { state } = useGlobalState();
  return axios<TData, TResponse, TBody>({
    headers: {
      "x-api-key": 'ah5V5XHU71V1oSRhW6jZSNqDddVmFfit',
      ...config.headers,
    },
    ...config,
  });
}

