import { WeddingModel, weddingKey } from "../model/wedding-model";
import { sql } from "kysely";
import vercelDb, { DatabaseMigration } from ".";

interface WeddingRepository extends DatabaseMigration {
  addWedding(val: Partial<WeddingModel>): Promise<void>;
}

export class WeddingRepositoryHandler implements WeddingRepository {
  createTable = async () => {
    await vercelDb.schema
      .createTable(weddingKey.table)
      .addColumn(weddingKey.id, "serial", (col) => col.primaryKey())
      .addColumn(weddingKey.date, "timestamp", (col) =>
        col.defaultTo(sql`now()`).notNull()
      )
      .addColumn(weddingKey.photo, "json", (col) => col.notNull())
      .addColumn(weddingKey.place, "json", (col) => col.notNull())
      .addColumn(weddingKey.music, "varchar", (col) => col.notNull())
      .addColumn(weddingKey.password, "varchar", (col) => col.notNull())
      .addColumn(weddingKey.bride, "json", (col) => col.notNull())
      .addColumn(weddingKey.groom, "json", (col) => col.notNull())
      .execute();
  };

  dropTable = async () => {
    await vercelDb.schema.dropTable(weddingKey.table).execute();
  };

  addWedding = async (val: Partial<WeddingModel>) => {};
}
