import axios from "axios";
import useSWR from "swr";
import useSWRMutation from "swr/mutation";
import { BaseResponse } from "../models/base-response";

export const useGetAndPostMethod = <BaseModel,>({ url }: { url: string }) => {
  const post = useSWRMutation(url, function (_, { arg }: { arg: BaseModel }) {
    return axios.post(url, arg);
  });

  const get = useSWR(url, () => {
    return axios
      .get<BaseResponse<BaseModel[]>>(url)
      .then((value) => value.data);
  });

  return {
    post,
    get,
  };
};
