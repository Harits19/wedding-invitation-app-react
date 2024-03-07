import { ResponseModel } from "./response-model";
import { WeddingTable } from "./database/wedding";

export interface DetailWeddingResponseModel
  extends ResponseModel<WeddingTable, string> {}
