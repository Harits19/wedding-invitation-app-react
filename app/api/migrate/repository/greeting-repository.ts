import { createKysely } from "@vercel/postgres-kysely";
import { greetingKey } from "../model/greeting-model";
import { Database } from "../model";
import { sql } from "kysely";
import vercelDb from ".";

const createTable = async () => {
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

const dropTable = async () => {
  await vercelDb.schema.dropTable(greetingKey.table).execute();
};

const GreetingRepository = {
  createTable,
  dropTable,
};

export default GreetingRepository;
