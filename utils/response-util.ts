import { ResponseModel } from "@/app/model/response-model";
import { HttpStatusCode } from "axios";

const success = <TData>({
  code = HttpStatusCode.Ok,
  payload,
}: {
  payload: Omit<ResponseModel<TData, undefined>, "error">;
  code?: number;
}) => {
  return Response.json(payload, { status: code });
};

const error = <TError>({
  code = HttpStatusCode.InternalServerError,
  payload,
}: {
  payload: Omit<ResponseModel<undefined, TError>, "data">;
  code?: number;
}) => {
  return Response.json(payload, { status: code });
};

const ResponseUtil = {
  success,
  error,
};

export default ResponseUtil;
