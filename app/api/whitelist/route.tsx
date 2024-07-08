import { WhitelistValidator } from "@/app/models/whitelist-model";
import { WhitelistRepository } from "@/app/repository/whitelist-repository";
import { ResponseUtil } from "@/app/utils/response-util";

export const GET = () => {
  return ResponseUtil.json({
    errorMessage: "Error when getting list of whitelist",
    callback: async () => {
      const result = await WhitelistRepository.getAll();
      return {
        message: "success get data",
        data: result,
      };
    },
  });
};

export const POST = async (request: Request) => {
  return ResponseUtil.json({
    errorMessage: "Error when post whitelist",
    callback: async () => {
      const body = await request.json();

      const whitelist = WhitelistValidator.parse(body);

      await WhitelistRepository.insert(whitelist);

      return {
        message: "Success post whitelist model",
        data: whitelist,
      };
    },
  });
};
