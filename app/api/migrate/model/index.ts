import { Kysely } from "kysely";
import { GreetingModel } from "./greeting-model";
import { WeddingModel } from "./wedding-model";

export interface DatabaseModel {
  greeting: GreetingModel;
  wedding: WeddingModel;
}

export interface DatabaseMigration {
  vercelDb: Kysely<DatabaseModel>;
  createTable(): Promise<void>;
  dropTable(): Promise<void>;
}
