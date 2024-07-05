import { AttendanceValidator } from "@/app/models/attendance-model";
import { ResponseUtil } from "@/app/utils/response-util";

export const dynamic = "force-dynamic"; // defaults to auto

export const GET = () => {
  return ResponseUtil.json({
    errorMessage: "Error when getting list of attendance",
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
    errorMessage: "Error when post attendance",
    callback: async () => {
      const body = await request.json();

      const attendance = AttendanceValidator.parse(body);

      return {
        message: "Success post attendance model",
        data: attendance,
      };
    },
  });
};
