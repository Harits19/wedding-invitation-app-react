import { WeddingModel } from "./wedding-model";

export interface AddWeddingRequest extends WeddingModel {
  apiKey: string;
}
