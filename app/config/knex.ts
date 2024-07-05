import { Knex, knex } from "knex";

const config: Knex.Config = {
  client: "sqlite3",
  connection: {
    host: "localhost",
    port: 4001,
  },
};
export const knexInstance = knex(config);


