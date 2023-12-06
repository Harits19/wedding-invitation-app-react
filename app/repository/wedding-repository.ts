import { WeddingModel, weddingKey } from "../model/wedding-model";
import { Kysely } from "kysely";
import { DatabaseMigration, DatabaseModel } from "../model";
import { v4 as uuidv4 } from "uuid";
import { EncryptUtil } from "@/utils/encrypt-util";

export class WeddingRepositoryHandler implements DatabaseMigration {
  vercelDb: Kysely<DatabaseModel>;

  constructor({ vercelDb }: { vercelDb: Kysely<DatabaseModel> }) {
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

  addWedding = async (val: Omit<WeddingModel, "id">) => {
    await this.vercelDb
      .insertInto("wedding")
      .values({
        id: uuidv4(),
        ...val,
      })
      .execute();
  };

  checkAuth = async (val: Pick<WeddingModel, "password" | "name">) => {
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

  update = async (val: Omit<WeddingModel, "id">) => {
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
    return await this.vercelDb
      .selectFrom("wedding")
      .select(["id", "name"])
      .execute();
  };
}
