import { greetingKey } from "../model/database/greeting";
import { Kysely, sql } from "kysely";
import { v4 as uuidv4 } from "uuid";
import { db } from "../config/mysql";
import { Database, DatabaseMigration } from "../model/database";

export class GreetingRepositoryHandler implements DatabaseMigration {
  db: Kysely<Database>;

  constructor({ db }: { db: Kysely<Database> }) {
    this.db = db;
  }

  createTable = async () => {
    console.info("start create greeting table");
    await this.db.schema
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
    await this.db.schema.dropTable(greetingKey.table).execute();
  };
}

export const greetingRepository = new GreetingRepositoryHandler({
  db: db,
});
