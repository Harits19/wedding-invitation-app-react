import { GreetingValidator } from "@/app/models/greeting-model";
import { ResponseUtil } from "@/app/utils/response-util";

export const GET = () => {
  return ResponseUtil.json({
    errorMessage: "Error when getting list of greeting",
    callback: async () => {
      return {
        message: "success get data",
        data: [],
      };
    },
  });
};

export const POST = async (request: Request) => {
  return ResponseUtil.json({
    errorMessage: "Error when post greeting",
    callback: async () => {
      const body = await request.json();

      const greeting = GreetingValidator.parse(body);

      return {
        message: "Success post greeting model",
        data: greeting,
      };
    },
  });
};

