import { NextResponse } from "next/server";
import { HttpStatusCode } from "axios";
import { greetingRepository, weddingRepository } from "../../dependency";
import { ResponseUtil } from "@/app/utils/response-util";

const listRepository = [greetingRepository, weddingRepository];

export const GET = async (req: Request) => {
  try {
    try {
      await Promise.all(listRepository.map((item) => item.dropTable()));
    } catch (error) {}
    await Promise.all(listRepository.map((item) => item.createTable()));

    return ResponseUtil.success({
      payload: {
        message: "success migrate database",
      },
    });
  } catch (error) {
    return ResponseUtil.error({
      payload: {
        message: "error migrate database",
        error: error,
      },
    });
  }
};

export const DELETE = async (req: Request) => {
  try {
    await Promise.all(listRepository.map((item) => item.dropTable()));
    return ResponseUtil.success({
      payload: {
        message: "success drop database",
      },
    });
  } catch (error) {
    return ResponseUtil.error({
      payload: {
        message: "error drop database",
        error: error,
      },
    });
  }
};
