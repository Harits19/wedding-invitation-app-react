import { kEnv } from "../constans/env";

export const concatBaseUrl = (text?: string) => {
  if (!text) return '';
  return kEnv.NEXT_PUBLIC_BASE_URL + text;
};
