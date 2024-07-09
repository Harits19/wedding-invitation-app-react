import { WhitelistRepository } from "@/app/core/repository/whitelist-repository";
import { ResponseUtil } from "@/app/core/utils/response-util";

export const DELETE = (_: Request, { params }: { params: { id: string } }) => {
  return ResponseUtil.json({
    errorMessage: `Failed to delete id ${params.id}`,
    callback: async () => {
      const id = Number(params.id);
      await WhitelistRepository.delete(id);
      return {
        message: "Success",
        data: id,
      };
    },
  });
};
