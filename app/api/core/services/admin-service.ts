import { environment } from "../config/env";

export default class AdminService {
  private static adminUsername = environment.string.ADMIN_USERNAME;
  private static adminPassword = environment.string.ADMIN_PASSWORD;
  public static checkIsAdmin = ({ name }: { name: string }) => {
    return name === this.adminUsername;
  };

  public static checkIsPasswordCorrect = ({
    password,
  }: {
    password: string;
  }) => {
    const isPasswordCorrect = this.adminPassword === password;
    if (!isPasswordCorrect) {
      throw "admin password incorrect";
    }
    return {
      name: this.adminUsername,
    };
  };
}
