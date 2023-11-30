import { weddingRepository } from "@/app/dependency";
import { WeddingModel, weddingSchema } from "@/app/model/wedding-model";
import ResponseUtil from "@/utils/response-util";

export const dynamic = "force-static";

export const POST = async (req: Request) => {
  try {
    const body = await req.json();
    const result = await weddingSchema.validate(body, { abortEarly: false });

    await weddingRepository.addWedding(result);

    return ResponseUtil.success({
      payload: {
        message: "success post wedding",
        data: body,
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
