import { ZodError } from "zod";
import { BaseResponse } from "../models/base-response";

export class ResponseUtil {
  static async json<T>({
    errorMessage,
    callback,
  }: {
    errorMessage: string;
    callback: () => Promise<BaseResponse<T>>;
  }) {
    try {
      return Response.json(await callback());
    } catch (error) {
      const errorResponse: BaseResponse<unknown> = {
        message: errorMessage,
        data: "Unexpected error",
      };

      if (error instanceof ZodError) {
        const parsedError = error.issues
          .map((issue) => {
            const path = issue.path.join(".");
            return `${path} : ${issue.message}`;
          })
          .join(" \n");
        errorResponse.data = parsedError;
      } else if (error instanceof Error && error.message) {
        console.log("ERROR : ", error);
        errorResponse.data = error.message;
      } else {
        console.log("ERROR : ", error);
        errorResponse.data = `${error || JSON.stringify(error)}`;
      }

      return Response.json(errorResponse);
    }
  }
}
