import { ResponseUtil } from "@/app/utils/response-util";
import { checkApiKey } from "../route";
import { HttpStatusCode } from "axios";
import { weddingSchema } from "@/app/model/database/wedding";
import { weddingRepository } from "@/app/repository/wedding-repository";

export const GET = async (
  req: Request,
  { params: { id } }: { params: { id: string } }
) => {
  try {
    const response = await checkApiKey();
    if (response) {
      return response;
    }
    const result = await weddingRepository.getDetailWedding(id);
    if (result) {
      result.password = undefined;
      return ResponseUtil.success({
        payload: {
          message: "success get all wedding",
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

export const PATCH = async (
  req: Request,
  { params: { id } }: { params: { id: string } }
) => {
  try {
    const body = {
      ...(await req.json()),
      id,
    };
    const validatedBody = await weddingSchema.validate(body, {
      abortEarly: false,
    });

    console.log("patch wedding body");

    await checkApiKey();
    await weddingRepository.update(validatedBody);

    return ResponseUtil.success({
      payload: {
        message: "success patch wedding",
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
