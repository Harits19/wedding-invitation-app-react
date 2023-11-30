import { WeddingModel, weddingKey } from "../model/wedding-model";
import { Kysely, sql } from "kysely";
import { DatabaseMigration, DatabaseModel } from "../model";

interface WeddingRepository extends DatabaseMigration {
  addWedding(val: Partial<WeddingModel>): Promise<void>;
}

export class WeddingRepositoryHandler implements WeddingRepository {
  vercelDb: Kysely<DatabaseModel>;

  constructor({ vercelDb }: { vercelDb: Kysely<DatabaseModel> }) {
    this.vercelDb = vercelDb;
  }

  createTable = async () => {
    await this.vercelDb.schema
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
    await this.vercelDb.schema.dropTable(weddingKey.table).execute();
  };

  addWedding = async (val: Omit<WeddingModel, "id">) => {
    await this.vercelDb.insertInto("wedding").values(val).execute();
  };
}
