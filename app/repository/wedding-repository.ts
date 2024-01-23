import { WeddingTable, weddingKey } from "../model/database/wedding";
import { v4 as uuidv4 } from "uuid";
import { EncryptUtil } from "@/app/utils/encrypt-util";
import { Database, DatabaseMigration } from "../model/database";
import { mysql2, mysql2Config } from "../config/mysql";
import { getDateNow } from "../utils/date-util";

export class WeddingRepositoryHandler implements DatabaseMigration {
  private db: any = {};
  private tableName = `${mysql2Config.database}.wedding`;

  createTable = async () => {
    console.info("start create wedding table table");
    try {
      await mysql2.query(`
      CREATE TABLE ${this.tableName} (
        id varchar(100) NOT NULL,
        date TIMESTAMP NOT NULL,
        photo json NOT NULL,
        place json NOT NULL,
        music varchar(100) NOT NULL,
        password varchar(100) NOT NULL,
        bride json NOT NULL,
        groom json NOT NULL,
        name varchar(100) NOT NULL,
        CONSTRAINT wedding_pk PRIMARY KEY (id)
      )
      `);
    } catch (error) {
      console.error("error ", error);
    }
    await this.alterTable();
  };

  alterTable = async () => {
    console.log("start alter table");
    const prefix = `ALTER TABLE ${this.tableName} `;
    const listAlter = [
      `ADD created_at varchar(100) NOT NULL`,
      `ADD updated_at varchar(100) NOT NULL`,
      `ADD phone_number varchar(100) NOT NULL`,
      `MODIFY name varchar(100) NOT NULL UNIQUE`,
    ];
    for (const alter of listAlter) {
      try {
        await mysql2.execute(`${prefix} ${alter}`);
      } catch (error) {
        console.log("error when alter table at query ", alter, error);
      }
    }
  };

  dropTable = async () => {
    console.info("start drop wedding table table");
    await mysql2.execute(`
    DROP TABLE ${this.tableName}
    `);
  };

  addWedding = async (val: Omit<WeddingTable, "id">) => {
    const [result, fields] = await mysql2.execute(
      `INSERT INTO abdullah28_invitation.wedding 
        (id, date, photo, place, music, password, bride, groom, name, created_at, updated_at, phone_number) 
       VALUES 
        (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`,
      [
        uuidv4(),
        val.date,
        val.photo,
        val.place,
        val.music,
        val.password,
        val.bride,
        val.groom,
        val.name,
        getDateNow(),
        getDateNow(),
        val.phone_number,
      ]
    );
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

export const weddingRepository = new WeddingRepositoryHandler();
