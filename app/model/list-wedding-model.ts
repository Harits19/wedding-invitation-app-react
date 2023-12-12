import { ResponseModel } from "./response-model";
import { WeddingModel } from "./wedding-model";

export interface Wedding extends Pick<WeddingModel, "name" | "id"> {}
export interface ListWeddingResponse extends ResponseModel<Wedding[], string> {}
export interface ListWeddingRequest {
  apiKey: string;
}
