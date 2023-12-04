import { weddingRepository } from "@/app/dependency";
import { WeddingModel, weddingSchema } from "@/app/model/wedding-model";
import { EncryptUtil } from "@/utils/encrypt-util";
import { ResponseUtil } from "@/utils/response-util";
import { HttpStatusCode } from "axios";
import { headers } from "next/headers";

export const dynamic = "force-dynamic";

export const POST = async (req: Request) => {
  try {
    const headerApiKey = headers().get("x-api-key");
    const envApiKey = process.env.API_KEY;

    if (headerApiKey !== envApiKey) {
      return ResponseUtil.error({
        code: HttpStatusCode.BadRequest,
        payload: {
          message: "wrong api key",
        },
      });
    }

    const body = await req.json();
    const validatedBody = await weddingSchema.validate(body, {
      abortEarly: false,
    });
    const hashPassword = await EncryptUtil.encryptPassword(
      validatedBody.password
    );
    validatedBody.password = hashPassword;

    await weddingRepository.addWedding(validatedBody);

    return ResponseUtil.success({
      payload: {
        message: "success post wedding",
      },
    });
  } catch (error) {
    return ResponseUtil.error({
      payload: {
        message: "error post wedding",
        error: error,
      },
    });
  }
};

export const PATCH = async (req: Request) => {
  try {
    const body = await req.json();
    const validatedBody = await weddingSchema.validate(body, {
      abortEarly: false,
    });

    await weddingRepository.checkAuth(validatedBody);
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
