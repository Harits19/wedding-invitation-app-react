import { mysql2, mysql2Config } from "../config/mysql";
import { DatabaseMigration } from "../../../model/database";
import { v4 as uuidv4 } from "uuid";
import { GreetingTable } from "../../../model/database/greeting";
import { getDateNow } from "../../../utils/date-util";
import { SqlUtil } from "../../../utils/sql-util";

export class GreetingRepositoryHandler implements DatabaseMigration {
  private tableName = `${mysql2Config.database}.greeting`;
  createTable = async () => {
    console.info("start create greeting table");
    try {
      await mysql2.execute(`
      CREATE TABLE ${this.tableName} (
        id varchar(100) NOT NULL,
        name varchar(100) NOT NULL,
        message varchar(100) NOT NULL,
        weddingId varchar(100) NOT NULL,
        attendance varchar(100) NOT NULL,
        createdAt TIMESTAMP NOT NULL,
        CONSTRAINT greeting_pk PRIMARY KEY (id)
      )
      `);
    } catch (error) {
      console.error("error hen create table", error);
    }
  };

  dropTable = async () => {
    console.info("start drop greeting table");
    await mysql2.execute(`
    DROP TABLE ${this.tableName}
    `);
  };

  insertGreeting = async (value: GreetingTable) => {
    await mysql2.execute(
      `
    INSERT INTO abdullah28_invitation.greeting
      (id, name, message, weddingId, attendance, createdAt)
    VALUES
      (?, ?, ?, ?, ?, ?);
    `,
      [
        uuidv4(),
        value.name,
        value.message,
        value.wedding_id,
        value.attendance,
        getDateNow(),
      ]
    );
  };

  getAllGreetingByWeddingId = async (filter: Record<string, unknown>) => {
    const conditions = SqlUtil.generateOrCondition(filter);
    const [rows, field] = await mysql2.query(
      `
    SELECT 
      * 
    FROM 
      ${this.tableName}
    WHERE 
     ${conditions}
    `
    );

    if (rows instanceof Array) {
      return rows.pop() as GreetingTable;
    }
  };
}

export const greetingRepository = new GreetingRepositoryHandler();
