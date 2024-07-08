import axios from "axios";
import useSWR from "swr";
import { BaseResponse } from "../models/base-response";
import { GreetingModel } from "../models/greeting-model";
import useSWRMutation from "swr/mutation";

export const useGreeting = () => {
  const url = "/api/greeting";
  const post = useSWRMutation(
    url,
    function (_, { arg }: { arg: GreetingModel }) {
      return axios.post(url, arg);
    },
  );

  const get = useSWR(url, () => {
    return axios
      .get<BaseResponse<GreetingModel[]>>(url)
      .then((value) => value.data);
  });

  return {
    post,
    get,
  };
};
