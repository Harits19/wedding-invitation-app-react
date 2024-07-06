import { knex } from "knex";
import { GreetingModel } from "../models/greeting-model";
import { knexConnection } from "../config/knex";

export class GreetingRepository {
  name = "greeting";
  rawDb: knex.Knex | undefined;
  knexInstance: knex.Knex | undefined;

  constructor() {
    console.log("initialize constructor");
    this.knexInstance = knexConnection();
    this.rawDb = knex<GreetingModel>(this.name);
  }

  get db() {
    if (!this.knexInstance) {
      throw new Error("undefined db");
    }
    return this.knexInstance;
  }

  async checkConnection() {
    const result = await this.knexInstance?.raw("SELECT 1");
    console.log("Database connected", result);
  }

  async initialize() {
    await this.checkConnection();
    const result = await this.db.schema.createTable(this.name, (table) => {
      table.increments("id");
      table.string("name");
      table.string("message");
      table.timestamp("createdAt");
    });

    console.log("success initialize greeting table", result);
  }

  async insert(value: GreetingModel) {
    await this.db.insert({
      ...value,
      createdAt: new Date(),
    });
  }

  async getAll() {
    return this.db.select();
  }
}
