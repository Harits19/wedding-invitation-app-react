import { Kysely } from "kysely";
import { WeddingTable } from "./wedding";

export interface Database {
  wedding: WeddingTable;
}

export interface DatabaseMigration {
  vercelDb: Kysely<Database>;
  createTable(): Promise<void>;
  dropTable(): Promise<void>;
}
