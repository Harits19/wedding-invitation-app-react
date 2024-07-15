import useSWR from "swr";
import { WhitelistModel, WhitelistRequest } from "../models/whitelist-model";
import { useGetAndPostMethod } from "./use-get-post-method";
import axios from "axios";
import { BaseResponse } from "../models/base-response";

const url = "/api/whitelist";

export const useWhitelist = () => {
  const base = useGetAndPostMethod<WhitelistRequest>({
    url,
  });

  return base;
};

export const useWhitelistFindByName = (name?: string) => {
  return useSWR(`${url}/name/${name}`, (key) => {
    if (!name) return undefined;
    return axios
      .get<BaseResponse<WhitelistModel | undefined>>(key)
      .then((value) => value.data);
  });
};
