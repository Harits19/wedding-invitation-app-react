import axios from "axios";
import useSWR from "swr";
import useSWRMutation from "swr/mutation";
import { BaseResponse } from "../models/base-response";
import { useAxios } from "../config/axios";

export const useGetAndPostMethod = <
  BaseModel extends {
    id?: number;
  },
>({
  url,
}: {
  url: string;
}) => {
  const wedAxios = useAxios();

  const post = useSWRMutation(
    url,
    async function (_, { arg }: { arg: BaseModel }) {
      try {
        await wedAxios({ url, data: arg, method: "POST" });
      } catch (error) {
        console.error("asdasd", error);
      }
    },
  );

  const get = useSWR(url, () => {
    return axios
      .get<BaseResponse<BaseModel[]>>(url)
      .then((value) => value.data);
  });

  const deleteMethod = useSWRMutation(
    url,
    function (_, { arg }: { arg: BaseModel }) {
      if (!arg.id) throw Error("Empty id");
      return axios.delete(`${url}/${arg.id}`);
    },
  );

  return {
    post,
    get,
    delete: deleteMethod,
  };
};
