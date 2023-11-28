import { createKysely } from "@vercel/postgres-kysely";
import { Database } from "../model";

const vercelDb = createKysely<Database>();

export interface DatabaseMigration {
  createTable(): Promise<void>;
  dropTable(): Promise<void>;
}

export default vercelDb;
