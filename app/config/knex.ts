import { Knex, knex } from "knex";

const config: Knex.Config = {
  client: "better-sqlite3",
  connection: {
    filename: "./database",
  },
  useNullAsDefault: true,
};

export const knexConnection = () => {
  const connection = knex(config);
  return connection;
};
