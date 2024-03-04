import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

export default function useFetch<
  TData = unknown,
  TResponse = AxiosResponse<TData>,
  TBody = unknown,
>(config: AxiosRequestConfig<TBody>) {
  // const { state } = useGlobalState();
  return axios<TData, TResponse, TBody>({
    baseURL: "http://localhost:8080",
    headers: {
      ...config.headers,
    },
    ...config,
  });
}
