import { weddingLoginSchema } from "@/app/model/database/wedding";
import { weddingRepository } from "../core/repository/wedding-repository";
import { ResponseUtil } from "@/app/utils/response-util";
import jwt, { JsonWebTokenError } from "jsonwebtoken";
import fs from "fs";
import JwtService from "../core/services/jwt-service";
import ErrorResponse from "@/app/model/error-response";

export const POST = async (req: Request) => {
  try {
    const body = await req.json();
    const validatedBody = await weddingLoginSchema.validate(body, {
      abortEarly: false,
    });

    const wedding = await weddingRepository.checkAuth(validatedBody);
    const accessToken = JwtService.generateAccessToken(wedding);
    const refreshToken = JwtService.generateRefreshToken(wedding);

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
