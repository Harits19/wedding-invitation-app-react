import { Generated, ColumnType } from "kysely";

export const GreetingColumnList = [
  "id",
  "wedding_id",
  "name",
  "message",
  "created_at",
] as const;
export type GreetingColumn = (typeof GreetingColumnList)[number];

export interface Greeting {
  id: Generated<number>;
  wedding_id: number;
  name: string;
  message: string;
  created_at: ColumnType<Date, string | undefined, never>;
}

export interface Database {
  greeting: Greeting;
}
