import { InferType, object, string } from "yup";
import { WeddingTable } from "./database/wedding";

export interface JwtModel {
  type: "refresh" | "access";
  name: WeddingTable["name"];
}

export const jwtRefreshSchema = object({
  refreshToken: string().required(),
  accessToken: string().required(),
});

export interface JwtRefreshRequest extends InferType<typeof jwtRefreshSchema> {}
