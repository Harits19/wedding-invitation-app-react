import { createConnection, createPool } from "mysql2";
import { Kysely, MysqlDialect } from "kysely";
import { Database } from "../model/database";

const mysql2Config = {
  database: "abdullah28_invitation",
  host: "103.58.102.50",
  user: "abdullah28_invitation",
  password: "harits963741852",
  port: 3306,
  connectTimeout: 1000000,
};

const dialect = new MysqlDialect({
  pool: createPool(mysql2Config),
});

export const db = new Kysely<Database>({
  dialect,
});

export const mysql2 = createConnection(mysql2Config);
