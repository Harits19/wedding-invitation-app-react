import { WeddingTable } from "./database/wedding";

export interface JwtModel {
  type: "refresh" | "access";
  name: WeddingTable["name"];
}
