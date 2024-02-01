import { DatabaseMigration } from "@/app/model/database";
import { mysql2, mysql2Config } from "../config/mysql";
import { LoginRequestModel } from "@/app/model/login-model";

export class AdminRepository implements DatabaseMigration {
  private tableName = `${mysql2Config.database}.admin`;
  createTable = async () => {
    console.info("start create greeting table");
    try {
      await mysql2.execute(`
      CREATE TABLE ${this.tableName} (
        id varchar(100) NOT NULL,
        name varchar(100) NOT NULL,
        password varchar(100) NOT NULL
      )
      `);
    } catch (error) {
      console.error("error hen create table", error);
    }
  };
  dropTable = async () => {
    await mysql2.execute(`
    DROP TABLE ${this.tableName}
    `);
  };

  // getAdminDetail = async (
  //   val: Partial<Pick<WeddingTable, "id" | "name">>
  // ): Promise<WeddingTable | undefined> => {
  //   console.log("start get detail wedding");
  //   const conditions = SqlUtil.generateOrCondition(val);

  //   console.log("conditions", conditions);

  //   const [rows, field] = await mysql2.query(
  //     `
  //   SELECT
  //     *
  //   FROM
  //     ${this.tableName}
  //   WHERE
  //    ${conditions}
  //   `
  //   );

  //   if (rows instanceof Array) {
  //     return rows.pop() as WeddingTable;
  //   }
  // };

  // checkAuth = async (val: LoginRequestModel) => {
  //   const result = await this.getDetailWedding({
  //     name: val.name,
  //   });
  //   if (!result) {
  //     throw "wrong username";
  //   }
  //   const hashPassword = result.password;

  //   const isPasswordCorrect = await EncryptUtil.comparePassword(
  //     hashPassword ?? "",
  //     val.password ?? ""
  //   );
  //   if (!isPasswordCorrect) {
  //     throw "wrong password";
  //   }
  //   return result;
  // };
}
