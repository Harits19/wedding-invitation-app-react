import { GreetingModel } from "./greeting-model";
import { WeddingModel } from "./wedding-model";

export interface Database {
  greeting: GreetingModel;
  wedding: WeddingModel;
}
