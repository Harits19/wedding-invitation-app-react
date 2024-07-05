import { knex } from "knex";
import { GreetingModel } from "../models/greeting-model";
import { knexInstance } from "../config/knex";

export class GreetingRepository {
  name = "greeting";
  db = knex<GreetingModel>("greeting");
  instance = knexInstance<GreetingModel>("greeting");

  async init() {
    this.db.schema.createTable(this.db.name, (table) => {
      table.increments("id");
      table.string("name");
      table.string("message");
      table.timestamp("createdAt");
    });
  }

  async insert(value: GreetingModel) {
    await this.db.insert(value);
  }

  async getAll() {
    return this.db.select();
  }
}
