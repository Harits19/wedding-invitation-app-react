import { WeddingTable } from "@/app/model/database/wedding";
import { JwtModel } from "@/app/model/jwt-model";
import fs from "fs";
import jwt, { SignOptions } from "jsonwebtoken";
import { environment } from "../config/env";

export default class JwtService {
  private static readonly accessTtl = environment.string.ACCESS_TOKEN_TTL;
  private static readonly refreshTtl = environment.string.REFRESH_TOKEN_TTL;

  public static generateAccessToken = (payload: Pick<WeddingTable, "name">) => {
    const token = this.generateToken(
      {
        type: "access",
        name: payload.name,
      },
      { expiresIn: this.accessTtl }
    );
    return token;
  };

  public static generateRefreshToken = (
    payload: Pick<WeddingTable, "name">
  ) => {
    const token = this.generateToken(
      {
        type: "refresh",
        name: payload.name,
      },
      { expiresIn: this.refreshTtl }
    );
    return token;
  };

  private static generateToken = <TJwtModel extends object>(
    payload: TJwtModel,
    option: SignOptions
  ) => {
    const privateKey = fs.readFileSync("private.key");
    const token = jwt.sign(payload, privateKey, {
      algorithm: "RS256",
      ...option,
    });
    return token;
  };

  public static checkToken = (token: string) => {
    const publicKey = fs.readFileSync("public.key");
    const decoded = jwt.verify(token, publicKey);

    return decoded as JwtModel;
  };
}
