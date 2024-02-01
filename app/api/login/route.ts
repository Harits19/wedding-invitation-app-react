import { weddingLoginSchema } from "@/app/model/database/wedding";
import { weddingRepository } from "../core/repository/wedding-repository";
import { ResponseUtil } from "@/app/utils/response-util";
import JwtService from "../core/services/jwt-service";
import AdminService from "../core/services/admin-service";

export const POST = async (req: Request) => {
  try {
    const body = await req.json();
    const validatedBody = await weddingLoginSchema.validate(body, {
      abortEarly: false,
    });

    const isAdmin = AdminService.checkIsAdmin({ name: validatedBody.name });
    const payload = await (async () => {
      if (isAdmin) {
        return AdminService.checkIsPasswordCorrect({
          password: validatedBody.password,
        });
      } else {
        return weddingRepository.checkAuth(validatedBody);
      }
    })();

    const accessToken = JwtService.generateAccessToken(payload);
    const refreshToken = JwtService.generateRefreshToken(payload);

    return ResponseUtil.success({
      payload: {
        message: "success login wedding",
        data: {
          access_token: accessToken,
          refresh_token: refreshToken,
        },
      },
    });
  } catch (error) {
    console.error("error when login", error);
    return ResponseUtil.error({
      payload: {
        message: "error post wedding",
        error: error,
      },
    });
  }
};
