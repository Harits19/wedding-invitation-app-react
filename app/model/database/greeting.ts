import {
  Generated,
  ColumnType,
  Selectable,
  Insertable,
  Updateable,
} from "kysely";

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
export interface GreetingTable {
  id: string;
  wedding_id: number;
  name: string;
  message: string;
  attendance: AttendanceType;
  created_at: ColumnType<Date, string | undefined, never>;
}

export interface Greeting extends Selectable<GreetingTable> {}
export interface GreetingCreate extends Insertable<GreetingTable> {}
export interface GreetingUpdate extends Updateable<GreetingTable> {}
