import { AxiosError } from "axios";
import useFetch from "../hooks/use-fetch";
import { DetailWeddingRequestModel } from "../model/detail-wedding-request-model";
import { DetailWeddingResponseModel } from "../model/detail-wedding-response-model";
import { ResponseModel } from "../model/response-model";

export const useFetchGetDetailWedding = async (
  props: DetailWeddingRequestModel,
) => {
  try {
    const result = await useFetch<DetailWeddingResponseModel>({
      baseURL: `/api/wedding/${props.id}`,
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
