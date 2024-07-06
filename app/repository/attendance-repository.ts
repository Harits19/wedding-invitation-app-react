import {
  AttendanceModel,
  attendanceTypeList,
} from "../models/attendance-model";
import { knexConnection } from "../config/knex";

export class AttendanceRepository {
  static tableName = "attendance";
  static async initialize() {
    await knexConnection({
      callback: async (db) => {
        const result = await db.schema.createTable(
          AttendanceRepository.tableName,
          (table) => {
            table.increments("id");
            table.string("name");
            table.enum("attendance", attendanceTypeList);
            table.timestamp("createdAt");
          },
        );
        console.log("success initialize attendance table", result);
      },
    });
  }

  static async insert(value: AttendanceModel) {
    return knexConnection({
      callback: async (db) => {
        const result = await db.table(AttendanceRepository.tableName).insert({
          ...value,
          createdAt: new Date(),
        });
        console.log("success insert attendance table", result);
      },
    });
  }

  static async getAll() {
    return knexConnection({
      callback: async (db) => {
        const result = await db.table(AttendanceRepository.tableName).select();
        console.log("success select attendance table");
        return result;
      },
    });
  }
}
