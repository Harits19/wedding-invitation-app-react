import { JwtRefreshRequest, jwtRefreshSchema } from "@/app/model/jwt-model";
import { ResponseUtil } from "@/app/utils/response-util";
import { headers } from "next/headers";
import JwtService from "../../core/services/jwt-service";
import { TokenExpiredError } from "jsonwebtoken";

export const POST = async (req: Request) => {
  try {
    const accessToken = headers().get("authorization");
    const { refreshToken }: JwtRefreshRequest = await req.json();

    const validatedBody = await jwtRefreshSchema.validate(
      {
        refreshToken,
        accessToken,
      },
      { abortEarly: false }
    );

    const generateNewAccessToken = async () => {
      try {
        await JwtService.checkToken(validatedBody.accessToken);
        return validatedBody.accessToken;
      } catch (error) {
        if (error instanceof TokenExpiredError) {
          console.log("access token expired");
          const payload = await JwtService.checkToken(
            validatedBody.refreshToken
          );
          const newAccessToken = await JwtService.generateAccessToken(payload);
          return newAccessToken;
        }

        throw error;
      }
    };

    const newToken = await generateNewAccessToken();
    return ResponseUtil.success({
      payload: {
        message: "success refresh token",
        data: {
          accessToken: newToken,
        },
      },
    });
  } catch (error) {
    console.log("error when refresh token", error);
    return ResponseUtil.error({
      payload: {
        error,
        message: JSON.stringify(error),
      },
    });
  }
};
