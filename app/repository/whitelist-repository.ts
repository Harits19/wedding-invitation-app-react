import { initTable } from "../config/knex";

export class WhitelistRepository {
  static tableName = "whitelist";
  static async initialize() {
    await initTable(WhitelistRepository.tableName, (table) => {
      table.increments("id");
      table.string("name");
    });
  }
}
