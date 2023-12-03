import {
  WeddingLoginModel,
  WeddingModel,
  weddingKey,
} from "../model/wedding-model";
import { Kysely, sql } from "kysely";
import { DatabaseMigration, DatabaseModel } from "../model";
import { v4 as uuidv4 } from "uuid";
import { EncryptUtil } from "@/utils/encrypt-util";

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
      .addColumn(weddingKey.id, "varchar", (col) => col.primaryKey().notNull())
      .addColumn(weddingKey.date, "timestamp", (col) =>
        col.defaultTo(sql`now()`).notNull()
      )
      .addColumn(weddingKey.authExpiredAt, "timestamp")
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

  login = async (val: WeddingLoginModel) => {
    const result = await this.vercelDb
      .selectFrom("wedding")
      .selectAll()
      .where("name", "=", val.name)
      .executeTakeFirst();
    if (!result) {
      throw "empty username";
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
}
