import { NextResponse } from "next/server";
import { createKysely } from "@vercel/postgres-kysely";
import { Database } from "./model/greeting";
import { HttpStatusCode } from "axios";
import { sql } from "kysely";
const db = createKysely<Database>();

export async function GET(request: Request) {
  console.log("create database");
  try {
    await createGreetingDatabase();
    const resultInsert = await db
      .insertInto("greeting")
      .values([
        {
          message: "test 1",
          name: "test 1",
          wedding_id: 1,
        },
        {
          message: "test 2",
          name: "test 2",
          wedding_id: 1,
        },
      ])
      .execute();

    console.log("result insert", resultInsert);

    const resultGet = await db.selectFrom("greeting").selectAll().execute();
    console.log("result get", resultGet);

    return NextResponse.json(
      { result: resultGet },
      { status: HttpStatusCode.Ok }
    );
  } catch (error) {
    console.error("error", error);
    return NextResponse.json({ error }, { status: 500 });
  }
}

const createGreetingDatabase = async () => {
  const resultDropGreeting = await db.schema.dropTable("greeting").execute();
  console.info("resultDrop", resultDropGreeting);
  const result = await db.schema
    .createTable("greeting")
    .addColumn("id", "serial", (col) => col.primaryKey())
    .addColumn("name", "varchar", (col) => col.notNull())
    .addColumn("message", "varchar", (col) => col.notNull())
    .addColumn("wedding_id", "integer", (col) => col.notNull())
    .addColumn("created_at", "timestamp", (col) =>
      col.defaultTo(sql`now()`).notNull()
    )
    .execute();

  console.info("createGreetingDatabase", result);
};
