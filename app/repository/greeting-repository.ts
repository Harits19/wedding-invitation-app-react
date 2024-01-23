import { mysql2, mysql2Config } from "../config/mysql";
import { DatabaseMigration } from "../model/database";

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
}

export const greetingRepository = new GreetingRepositoryHandler();
