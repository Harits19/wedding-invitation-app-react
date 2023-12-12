import axios, { AxiosError } from "axios";
import { ListWeddingRequest, ListWeddingResponse } from "../model/list-wedding-model";
import { ResponseModel } from "../model/response-model";

export const fetchGetListTemplate = async ({ apiKey }: ListWeddingRequest) => {
  try {
    const result = await axios.get<ListWeddingResponse>("/api/wedding", {
      headers: { "x-api-key": apiKey },
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
    throw `unexpected error ${JSON.stringify(error)}`;
  }
};
