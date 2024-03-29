import { ResponseModel } from "@/app/[name]/model/response-model";
import { HttpStatusCode } from "axios";
export class ResponseUtil {
  static success = <TData>({
    code = HttpStatusCode.Ok,
    payload,
  }: {
    payload: Omit<ResponseModel<TData, undefined>, "error">;
    code?: number;
  }) => {
    return Response.json(payload, { status: code });
  };

  static error = <TError>({
    code = HttpStatusCode.InternalServerError,
    payload,
  }: {
    payload: Omit<ResponseModel<undefined, TError>, "data">;
    code?: number;
  }) => {
    return Response.json(payload, { status: code });
  };
}
