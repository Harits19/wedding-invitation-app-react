import { NextResponse } from "next/server";
import { HttpStatusCode } from "axios";
import { greetingRepository, weddingRepository } from "../../dependency";

const listRepository = [greetingRepository, weddingRepository];

export const GET = async (request: Request) => {
  try {
    try {
      await Promise.all(listRepository.map((item) => item.dropTable()));
    } catch (error) {}
    await Promise.all(listRepository.map((item) => item.createTable()));
    return NextResponse.json(
      { message: "success migrate database" },
      { status: HttpStatusCode.Ok }
    );
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
};

export const DELETE = async (request: Request) => {
  try {
    await Promise.all(listRepository.map((item) => item.dropTable()));
    return NextResponse.json(
      { message: "success drop database" },
      { status: HttpStatusCode.Ok }
    );
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
};
