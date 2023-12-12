import * as bcrypt from "bcrypt";

const saltRounds = 10;

export class EncryptUtil {
  static encryptPassword = async (plainPassword: string) => {
    const salt = await bcrypt.genSalt(saltRounds);
    const encryptedText = await bcrypt.hash(plainPassword, salt);
    return encryptedText;
  };

  static comparePassword = async (
    hashPassword: string,
    plainPassword: string
  ) => {
    const isSame = await bcrypt.compare(plainPassword, hashPassword);
    return isSame;
  };
}
