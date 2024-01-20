import { WeddingTable, weddingKey } from "../model/database/wedding";
import { Kysely } from "kysely";
import { v4 as uuidv4 } from "uuid";
import { EncryptUtil } from "@/app/utils/encrypt-util";
import { Database, DatabaseMigration } from "../model/database";
import { db } from "../config/mysql";

export class WeddingRepositoryHandler implements DatabaseMigration {
  db: Kysely<Database>;

  constructor({ db }: { db: Kysely<Database> }) {
    this.db = db;
  }

  createTable = async () => {
    console.info('start create wedding table table');
    await this.db.schema
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
    await this.db.schema.dropTable(weddingKey.table).execute();
  };

  addWedding = async (val: Omit<WeddingTable, "id">) => {
    await this.db
      .insertInto("wedding")
      .values({
        id: uuidv4(),
        ...val,
      })
      .execute();
  };

  checkAuth = async (val: Pick<WeddingTable, "password" | "name">) => {
    const result = await this.db
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
    await this.db
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
    return this.db.selectFrom("wedding").select(["id", "name"]).execute();
  };

  getDetailWedding = async (
    id: string
  ): Promise<Partial<WeddingTable> | undefined> => {
    return this.db
      .selectFrom("wedding")
      .selectAll()
      .where("id", "=", id)
      .executeTakeFirst();
  };
}

export const weddingRepository = new WeddingRepositoryHandler({
  db: db,
});
