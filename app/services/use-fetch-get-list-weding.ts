import axios, { AxiosError } from "axios";
import { ResponseModel } from "../model/response-model";
import { ListWeddingResponse } from "../model/list-wedding-response-model";
import useFetch from "../hooks/use-fetch";

export const useFetchGetListTemplate = async () => {
  try {
    const result = await useFetch<ListWeddingResponse>({
      baseURL: "/api/wedding",
      method: "GET",
    });
    return result.data.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      const errorMessage = error.response?.data as ResponseModel<
        undefined,
        undefined
      >;
      console.log({ errorMessage: errorMessage.message });
      throw errorMessage;
    }
    throw `unexpected error ${JSON.stringify(error)} ${error}`;
  }
};
