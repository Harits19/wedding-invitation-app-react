import { ResponseUtil } from "@/app/utils/response-util";
import { checkApiKey } from "../route";
import { weddingRepository } from "@/app/dependency";
import { HttpStatusCode } from "axios";

export const GET = async (
  req: Request,
  { params: { id } }: { params: { id: string } }
) => {
  try {
    const response = await checkApiKey();
    if (response) {
      return response;
    }
    const result= await weddingRepository.getDetailWedding(id);
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
