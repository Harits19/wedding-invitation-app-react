import { greetingRepository } from "@/app/api/core/repository/greeting-repository";
import { ResponseUtil } from "@/app/utils/response-util";
import { HttpStatusCode } from "axios";

export const GET = async (
  req: Request,
  { params: { id } }: { params: { id: string } },
) => {
  try {
    const result = await greetingRepository.getAllGreetingByWeddingId({ id });
    if (result) {
      return ResponseUtil.success({
        payload: {
          message: "success get all greeting",
          data: result,
        },
      });
    } else {
      return ResponseUtil.error({
        code: HttpStatusCode.NotFound,
        payload: {
          message: "empty result",
        },
      });
    }
  } catch (error) {
    return ResponseUtil.error({
      payload: {
        message: "error patch wedding",
        error: error,
      },
    });
  }
};

export const POST = async (
  req: Request,
  { params: { id } }: { params: { id: string } },
) => {
  try {
    const body = await req.json();
    await greetingRepository.insertGreeting(body);
    return ResponseUtil.success({
      payload: {
        message: "success get all greeting",
      },
    });
  } catch (error) {
    return ResponseUtil.error({
      payload: {
        message: "error patch wedding",
        error: error,
      },
    });
  }
};
