import { AxiosError } from "axios";
import { ResponseModel } from "../model/response-model";
import useFetch from "../hooks/use-fetch";
import { LoginRequestModel, LoginResponseModel } from "../model/login-model";

export const useFetchPostLogin = async (props: LoginRequestModel) => {
  try {
    const result = await useFetch({
      baseURL: "/api/login",
      method: "POST",
      data: props,
    });
    return result.data as ResponseModel<LoginResponseModel>;
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
