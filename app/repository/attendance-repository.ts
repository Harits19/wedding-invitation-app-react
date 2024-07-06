// import { knex } from "knex";
// import {
//   AttendanceModel,
//   attendanceTypeList,
// } from "../models/attendance-model";

// export class AttendanceRepository {
//   name = "attendance";
//   db = knex<AttendanceModel>(this.name);

//   async init() {
//     this.db.schema.createTable(this.name, (table) => {
//       table.increments("id");
//       table.string("name");
//       table.enum("attendance", attendanceTypeList);
//       table.timestamp("createdAt");
//     });
//   }

//   async insert(value: AttendanceModel) {
//     return this.db.insert({
//       ...value,
//       createdAt: new Date(),
//     });
//   }

//   async getAll() {
//     return this.db.select();
//   }
// }
