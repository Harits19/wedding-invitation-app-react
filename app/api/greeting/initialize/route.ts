import { GreetingRepository } from "@/app/repository/greeting-repository";
import { ResponseUtil } from "@/app/utils/response-util";

export const GET = () => {
  return ResponseUtil.json({
    errorMessage: "Error when initialize greeting database",
    callback: async () => {
      console.log("start initialize database");
      const repository = new GreetingRepository()
      await repository.initialize();
      return {
        message: "success create greeting database",
      };
    },
  });
};
