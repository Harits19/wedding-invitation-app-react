import { greetingKey } from "../model/greeting-model";
import { Kysely, sql } from "kysely";
import { DatabaseMigration, DatabaseModel } from "../model";
import { v4 as uuidv4 } from 'uuid';


interface GreetingRepository extends DatabaseMigration {}

export class GreetingRepositoryHandler implements GreetingRepository {
  vercelDb: Kysely<DatabaseModel>;

  constructor({ vercelDb }: { vercelDb: Kysely<DatabaseModel> }) {
    this.vercelDb = vercelDb;
  }

  createTable = async () => {
    await this.vercelDb.schema
      .createTable(greetingKey.table)
      .addColumn(greetingKey.id, "varchar", (col) => col.primaryKey().defaultTo(uuidv4()))
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
