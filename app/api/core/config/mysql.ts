import { createConnection, createPool } from "mysql2/promise";

export const mysql2Config = {
  database: "abdullah28_invitation",
  host: "103.58.102.50",
  user: "abdullah28_invitation",
  password: "harits963741852",
  port: 3306,
  connectTimeout: 1000000,
};

export const mysql2 = await (async () => {
  return await createConnection(mysql2Config);
})();