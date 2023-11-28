import { NextResponse } from "next/server";
import { HttpStatusCode } from "axios";
import GreetingRepository from "./repository/greeting-repository";
import WeddingRepository from "./repository/wedding-repository";

const listRepository = [GreetingRepository, WeddingRepository];

export const GET = async (request: Request) => {
  try {
    await Promise.all(listRepository.map((item) => item.dropTable()));
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
