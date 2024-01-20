import { greetingKey } from "../model/database/greeting";
import { Kysely, sql } from "kysely";
import { v4 as uuidv4 } from "uuid";
import { db, mysql2 } from "../config/mysql";
import { Database, DatabaseMigration } from "../model/database";

export class GreetingRepositoryHandler implements DatabaseMigration {
  db: Kysely<Database>;

  constructor({ db }: { db: Kysely<Database> }) {
    this.db = db;
  }

  createTable = async () => {
    console.info("start create greeting table");
    await mysql2.execute(`
    CREATE TABLE abdullah28_invitation.greeting (
      id varchar(100) NOT NULL,
      name varchar(100) NOT NULL,
      message varchar(100) NOT NULL,
      weddingId varchar(100) NOT NULL,
      attendance varchar(100) NOT NULL,
      createdAt TIMESTAMP NOT NULL,
      CONSTRAINT greeting_pk PRIMARY KEY (id)
    )
    `);
  };

  dropTable = async () => {
    console.info("start drop greeting table");
    await this.db.schema.dropTable(greetingKey.table).execute();
  };
}

export const greetingRepository = new GreetingRepositoryHandler({
  db: db,
});
