import { AxiosError } from "axios";
import { ResponseModel } from "../model/response-model";
import { WeddingTable } from "../model/database/wedding";
import useFetch from "../hooks/use-fetch";

export const useFetchPostWedding = async (props: WeddingTable) => {
  console.log("calledUseFetchPostWedding", props);
  try {
    const result = await useFetch({
      baseURL: "/api/wedding",
      method: "POST",
      data: props,
    });
    console.log("resultPostWedding", result);
    return result.data;
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
