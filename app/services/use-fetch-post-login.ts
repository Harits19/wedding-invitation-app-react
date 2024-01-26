import { AxiosError } from "axios";
import { ResponseModel } from "../model/response-model";
import useFetch from "../hooks/use-fetch";
import { LoginModel } from "../model/login-model";

export const useFetchPostLogin = async (props: LoginModel) => {
  try {
    const result = await useFetch({
      baseURL: "/api/login",
      method: "POST",
      data: props,
    });
    return result.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      const errorMessage = error.response?.data as ResponseModel<
        undefined,
        undefined
      >;
      throw errorMessage;
    }
  }
};
