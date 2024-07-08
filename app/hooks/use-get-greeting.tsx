import axios from "axios";
import useSWR from "swr";
import { BaseResponse } from "../models/base-response";
import { GreetingModel } from "../models/greeting-model";

export const useGetGreeting = () => {
  const url = "/api/greeting";

  return useSWR(url, () => {
    return axios
      .get<BaseResponse<GreetingModel[]>>(url)
      .then((value) => value.data);
  });
};
