import { WhitelistModel } from "../models/whitelist-model";
import { useGetAndPostMethod } from "./use-get-post-method";

export const useWhitelist = () => {
  return useGetAndPostMethod<WhitelistModel>({
    url: "/api/whitelist",
  });
};
