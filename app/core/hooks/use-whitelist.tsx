import { WhitelistModel } from "../models/whitelist-model";
import { useGetAndPostMethod } from "./use-get-post-method";

export const useWhitelist = () =>
  useGetAndPostMethod<WhitelistModel>({
    url: "/api/whitelist",
  });
