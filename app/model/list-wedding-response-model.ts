import { ResponseModel } from "./response-model";
import { WeddingModel } from "./wedding-model";

export interface ListWeddingResponse
  extends ResponseModel<Partial<WeddingModel>[], string> {}
