import { WeddingTable, weddingKey } from "../model/database/wedding";
import { Kysely } from "kysely";
import { v4 as uuidv4 } from "uuid";
import { EncryptUtil } from "@/app/utils/encrypt-util";
import { Database, DatabaseMigration } from "../model/database";
import { db } from "../config/mysql";

export class WeddingRepositoryHandler implements DatabaseMigration {
  vercelDb: Kysely<Database>;

  constructor({ vercelDb }: { vercelDb: Kysely<Database> }) {
    this.vercelDb = vercelDb;
  }

  createTable = async () => {
    await this.vercelDb.schema
      .createTable(weddingKey.table)
      .addColumn(weddingKey.id, "varchar", (col) => col.primaryKey().notNull())
      .addColumn(weddingKey.date, "timestamp", (col) => col.notNull())
      .addColumn(weddingKey.photo, "json", (col) => col.notNull())
      .addColumn(weddingKey.place, "json", (col) => col.notNull())
      .addColumn(weddingKey.music, "varchar", (col) => col.notNull())
      .addColumn(weddingKey.password, "varchar", (col) => col.notNull())
      .addColumn(weddingKey.bride, "json", (col) => col.notNull())
      .addColumn(weddingKey.groom, "json", (col) => col.notNull())
      .addColumn(weddingKey.name, "varchar", (col) => col.notNull().unique())
      .execute();
  };

  dropTable = async () => {
    await this.vercelDb.schema.dropTable(weddingKey.table).execute();
  };

  addWedding = async (val: Omit<WeddingTable, "id">) => {
    await this.vercelDb
      .insertInto("wedding")
      .values({
        id: uuidv4(),
        ...val,
      })
      .execute();
  };

  checkAuth = async (val: Pick<WeddingTable, "password" | "name">) => {
    const result = await this.vercelDb
      .selectFrom("wedding")
      .selectAll()
      .where("name", "=", val.name)
      .executeTakeFirst();
    if (!result) {
      throw "wrong username";
    }
    const hashPassword = result.password;

    const isPasswordCorrect = await EncryptUtil.comparePassword(
      hashPassword,
      val.password
    );
    if (!isPasswordCorrect) {
      throw "wrong password";
    }
  };

  update = async (val: Omit<WeddingTable, "id">) => {
    await this.vercelDb
      .updateTable("wedding")
      .set({
        ...val,
        password: undefined,
        name: undefined,
      })
      .where("name", "=", val.name)
      .executeTakeFirst();
  };

  getAllWedding = async () => {
    return this.vercelDb.selectFrom("wedding").select(["id", "name"]).execute();
  };

  getDetailWedding = async (
    id: string
  ): Promise<Partial<WeddingTable> | undefined> => {
    return this.vercelDb
      .selectFrom("wedding")
      .selectAll()
      .where("id", "=", id)
      .executeTakeFirst();
  };
}

export const weddingRepository = new WeddingRepositoryHandler({
  vercelDb: db,
});
