import { weddingRepository } from "@/app/dependency";
import { WeddingModel, weddingSchema } from "@/app/model/wedding-model";
import { EncryptUtil } from "@/app/utils/encrypt-util";
import { ResponseUtil } from "@/app/utils/response-util";
import { HttpStatusCode } from "axios";
import { headers } from "next/headers";

export const dynamic = "force-dynamic";

export const POST = async (req: Request) => {
  try {
    const response = await checkApiKey();
    if (response) {
      return response;
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

export const GET = async (req: Request) => {
  try {
    const response = await checkApiKey();
    if (response) {
      return response;
    }
    const result = await weddingRepository.getAllWedding();
    return ResponseUtil.success({
      payload: {
        message: "success get all wedding",
        data: result,
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

export const checkApiKey = () => {
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
};
