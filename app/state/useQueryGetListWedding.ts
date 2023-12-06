import axios, { AxiosError } from "axios";
import { QueryKey, useQuery } from "react-query";
import { ResponseModel } from "../model/response-model";
import { WeddingModel } from "../model/wedding-model";

interface Data extends Pick<WeddingModel, "name" | "id"> {}
interface Response extends ResponseModel<Data[], string> {}
interface Props {
  apiKey: string;
}

const fetchGetListTemplate = async ({ apiKey }: Props) => {
  try {
    const result = await axios.get<Response>("/api/wedding", {
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

export const useQueryGetListWedding = ({ apiKey }: Props) => {
  return useQuery<
    Data[] | undefined,
    ResponseModel<undefined, undefined>,
    Data[] | undefined,
    string[]
  >({
    queryKey: ["useQueryGetListWedding", apiKey],
    queryFn: () => fetchGetListTemplate({ apiKey }),
  });
};
