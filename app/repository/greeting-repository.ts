import { greetingKey } from "../model/greeting-model";
import { Kysely, sql } from "kysely";
import { v4 as uuidv4 } from "uuid";
import { db } from "../config/mysql";
import { Database, DatabaseMigration } from "../model/database";

export class GreetingRepositoryHandler implements DatabaseMigration {
  vercelDb: Kysely<Database>;

  constructor({ vercelDb }: { vercelDb: Kysely<Database> }) {
    this.vercelDb = vercelDb;
  }

  createTable = async () => {
    await this.vercelDb.schema
      .createTable(greetingKey.table)
      .addColumn(greetingKey.id, "varchar", (col) =>
        col.primaryKey().defaultTo(uuidv4())
      )
      .addColumn(greetingKey.name, "varchar", (col) => col.notNull())
      .addColumn(greetingKey.message, "varchar", (col) => col.notNull())
      .addColumn(greetingKey.weddingId, "integer", (col) => col.notNull())
      .addColumn(greetingKey.attendance, "varchar", (col) => col.notNull())
      .addColumn(greetingKey.createdAt, "timestamp", (col) =>
        col.defaultTo(sql`now()`).notNull()
      )
      .execute();
  };

  dropTable = async () => {
    await this.vercelDb.schema.dropTable(greetingKey.table).execute();
  };
}

export const greetingRepository = new GreetingRepositoryHandler({
  vercelDb: db,
});
