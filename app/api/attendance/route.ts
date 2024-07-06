import { AttendanceValidator } from "@/app/models/attendance-model";
import { AttendanceRepository } from "@/app/repository/attendance-repository";
import { ResponseUtil } from "@/app/utils/response-util";

export const GET = () => {
  return ResponseUtil.json({
    errorMessage: "Error when getting list of attendance",
    callback: async () => {
      const result = await AttendanceRepository.getAll();
      return {
        message: "success get data",
        data: result,
      };
    },
  });
};

export const POST = async (request: Request) => {
  return ResponseUtil.json({
    errorMessage: "Error when post attendance",
    callback: async () => {
      const body = await request.json();

      const attendance = AttendanceValidator.parse(body);

      await AttendanceRepository.insert(attendance);

      return {
        message: "Success post attendance model",
        data: attendance,
      };
    },
  });
};
