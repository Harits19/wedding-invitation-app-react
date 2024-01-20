import { createPool } from "mysql2"; 
import { Kysely, MysqlDialect } from "kysely";
import { Database } from "../model/database";

const dialect = new MysqlDialect({
  pool: createPool({
    database: "abdullah28_invitation",
    host: "localh103.58.102.50ost",
    user: "abdullah28_invitation",
    password: "harits963741852",
    port: 3308,
    connectionLimit: 10,
  }),
});

export const db = new Kysely<Database>({
  dialect,
});
