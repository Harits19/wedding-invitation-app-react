import { createConnection, createPool } from "mysql2";
import { Database } from "../model/database";

export const mysql2Config = {
  database: "abdullah28_invitation",
  host: "103.58.102.50",
  user: "abdullah28_invitation",
  password: "-",
  port: 3306,
  connectTimeout: 1000000,
};

export const mysql2 = createConnection(mysql2Config);
