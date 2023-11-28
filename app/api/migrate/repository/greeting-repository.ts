import { greetingKey } from "../model/greeting-model";
import { sql } from "kysely";
import vercelDb, { DatabaseMigration } from ".";

interface GreetingRepository extends DatabaseMigration {}

export class GreetingRepositoryHandler implements GreetingRepository {
  createTable = async () => {
    await vercelDb.schema
      .createTable(greetingKey.table)
      .addColumn(greetingKey.id, "serial", (col) => col.primaryKey())
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
    await vercelDb.schema.dropTable(greetingKey.table).execute();
  };
}
