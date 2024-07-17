import useSWR from "swr";
import { WhitelistModel, WhitelistRequest } from "../models/whitelist-model";
import axios from "axios";
import { BaseResponse } from "../models/base-response";
import useSWRMutation from "swr/mutation";
import { useAxios } from "../config/axios";

const url = "/api/whitelist";

interface WhitelistUpdateDeleteRequest {
  token?: string;
  data: WhitelistModel;
}

export const useWhitelist = () => {
  const { fetch } = useAxios();

  const post = useSWRMutation(
    url,
    async function (_, { arg }: { arg: WhitelistRequest }) {
      return fetch({
        url,
        data: arg.data,
        method: "POST",
        headers: {
          token: arg.token,
        },
      });
    },
  );

  const get = useSWR(url, () => {
    return fetch<unknown, BaseResponse<WhitelistModel[]>>({
      url,
      method: "GET",
    }).then((value) => value.data);
  });

  const del = useSWRMutation(
    url,
    function (_, { arg }: { arg: WhitelistUpdateDeleteRequest }) {
      if (!arg.data.id) throw Error("Empty id");
      return fetch({
        url: `${url}/${arg.data.id}`,
        method: "DELETE",
        headers: {
          token: arg.token,
        },
      });
    },
  );

  const update = useSWRMutation(
    url,
    async function (_, { arg }: { arg: WhitelistUpdateDeleteRequest }) {
      return fetch({
        url: `${url}/${arg.data.id}`,
        data: arg.data,
        method: "PUT",
        headers: {
          token: arg.token,
        },
      });
    },
  );

  return {
    post,
    get,
    del,
    update,
  };
};

export const useWhitelistFindByName = (name?: string) => {
  return useSWR(`${url}/name/${name}`, (key) => {
    if (!name) return undefined;
    return axios
      .get<BaseResponse<WhitelistModel | undefined>>(key)
      .then((value) => value.data);
  });
};
