import { kEnv } from "../constans/env";
import { ImageSrc } from "../model/invitation-model";

export const concatBaseUrl = (src?: ImageSrc) => {
  if (src?.local) return URL.createObjectURL(src.local);
  if (src?.link) return kEnv.NEXT_PUBLIC_BASE_URL + src.link;
  return "";
};
