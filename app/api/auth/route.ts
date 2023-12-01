import { weddingRepository } from "@/app/dependency";
import { weddingLoginSchema } from "@/app/model/wedding-model";
import { ResponseUtil } from "@/utils/response-util";

export const POST = async (req: Request) => {
  try {
    const body = await req.json();
    const validatedBody = await weddingLoginSchema.validate(body, {
      abortEarly: false,
    });
    await weddingRepository.login(validatedBody);
    return ResponseUtil.success({
      payload: {
        message: "success login",
      },
    });
  } catch (error) {
    return ResponseUtil.error({
      payload: {
        message: "error login",
        error: error,
      },
    });
  }
};
