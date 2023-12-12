export interface ResponseModel<TData = unknown, TError = unknown> {
  message: string;
  data?: TData;
  error?: TError;
}
