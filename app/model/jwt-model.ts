import { InferType, object, string } from "yup";
import { WeddingTable } from "./database/wedding";

export type JwtType = "refresh" | "access";
export interface JwtModel {
  type: JwtType;
  name: WeddingTable["name"];
}

export interface JwtAdmin {
  type: JwtType;
}

export const jwtRefreshSchema = object({
  refreshToken: string().required(),
  accessToken: string().required(),
});

export interface JwtRefreshRequest extends InferType<typeof jwtRefreshSchema> {}
