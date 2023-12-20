import { ResponseModel } from "./response-model";
import { WeddingModel } from "./wedding-model";

export interface DetailWeddingResponseModel
  extends ResponseModel<WeddingModel, string> {}
