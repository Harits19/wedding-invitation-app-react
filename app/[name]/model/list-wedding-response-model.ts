import { ResponseModel } from "./response-model";
import { WeddingTable } from "./database/wedding";

export interface ListWeddingResponse
  extends ResponseModel<Partial<WeddingTable>[], string> {}
