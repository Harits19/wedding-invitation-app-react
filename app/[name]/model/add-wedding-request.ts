import { WeddingTable } from "./database/wedding";

export interface AddWeddingRequest extends WeddingTable {
  apiKey: string;
}
