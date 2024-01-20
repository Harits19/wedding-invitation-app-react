import { WeddingTable } from "./wedding";
import { GreetingTable } from "./greeting";

export interface Database {
  wedding: WeddingTable;
  greeting: GreetingTable;
}

export interface DatabaseMigration {
  createTable(): Promise<void>;
  dropTable(): Promise<void>;
}
