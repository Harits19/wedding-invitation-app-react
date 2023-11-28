import { weddingKey } from "../model/wedding-model";
import { sql } from "kysely";
import vercelDb from ".";

const createTable = async () => {
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

const dropTable = async () => {
  await vercelDb.schema.dropTable(weddingKey.table).execute();
};

const WeddingRepository = {
  createTable,
  dropTable,
};

export default WeddingRepository;
