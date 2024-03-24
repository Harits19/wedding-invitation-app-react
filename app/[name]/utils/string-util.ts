import { ImageSrc } from "../model/invitation-model";

export const concatBaseUrl = (src?: ImageSrc) => {
  if (src?.local) return URL.createObjectURL(src.local);
  if (src?.link) return src.link;
  return "";
};
