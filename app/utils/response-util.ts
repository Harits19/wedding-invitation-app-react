import { ZodError } from "zod";
import { BaseResponse } from "../models/base-response";

export class ResponseUtil {
  static async json<T>({
    callback,
    errorMessage,
  }: {
    callback: () => Promise<BaseResponse<T>>;
    errorMessage: string;
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
        errorResponse.data = error.message;
      } else {
        errorResponse.data = `${error || JSON.stringify(error)}`;
      }

      return Response.json(errorResponse);
    }
  }
}
