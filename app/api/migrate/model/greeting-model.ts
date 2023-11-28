import { Generated, ColumnType } from "kysely";

export const greetingKey = {
  table: "greeting",
  id: "id",
  weddingId: "wedding_id",
  name: "name",
  message: "message",
  attendance: "attendance",
  createdAt: "created_at",
};
export const attendanceTypeList = ["present", "no_present"] as const;
export type AttendanceType = (typeof attendanceTypeList)[number];
export interface GreetingModel {
  id: Generated<number>;
  wedding_id: number;
  name: string;
  message: string;
  attendance: AttendanceType;
  created_at: ColumnType<Date, string | undefined, never>;
}
