import { WhitelistRepository } from "@/app/repository/whitelist-repository";
import { ResponseUtil } from "@/app/utils/response-util";

export const GET = () => {
  return ResponseUtil.responseInitTable({
    tableName: WhitelistRepository.tableName,
    runInitDatabase: WhitelistRepository.initialize,
  });
};
