export interface ResponseModel<TData, TError> {
  message: string;
  data?: TData;
  error?: TError;
}
