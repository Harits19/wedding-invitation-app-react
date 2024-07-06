import { AttendanceRepository } from "@/app/repository/attendance-repository";
import { ResponseUtil } from "@/app/utils/response-util";

export const GET = () => {
  return ResponseUtil.json({
    errorMessage: "Error when initialize attendance database",
    callback: async () => {
      console.log("start initialize database");
      await AttendanceRepository.initialize();
      return {
        message: "success create attendance database",
      };
    },
  });
};
