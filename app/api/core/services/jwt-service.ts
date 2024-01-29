import { WeddingTable } from "@/app/model/database/wedding";
import { JwtModel } from "@/app/model/jwt-model";
import fs from "fs";
import jwt, { SignOptions } from "jsonwebtoken";

export default class JwtService {
  public static generateAccessToken = (wedding: Pick<WeddingTable, "name">) => {
    const token = this.generateToken(
      {
        type: "access",
        name: wedding.name,
      },
      { expiresIn: "1 days" }
    );
    return token;
  };

  public static generateRefreshToken = (wedding: WeddingTable) => {
    const token = this.generateToken(
      {
        type: "refresh",
        name: wedding.name,
      },
      { expiresIn: "7d" }
    );
    return token;
  };

  private static generateToken = (payload: JwtModel, option: SignOptions) => {
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
