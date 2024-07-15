import { useToast } from "@/app/components/ui/use-toast";
import axios, { AxiosError, AxiosRequestConfig } from "axios";

export function useCatchError() {
  const { toast } = useToast();

  return {
    handleError: (error: unknown) => {
      if (error instanceof AxiosError) {
        toast({
          title: "AxiosError",
          description: JSON.stringify(error.toJSON()),
        });
        return;
      }

      console.error("Unexpected Error : ", error);
    },
  };
}

export function useAxios() {
  const { handleError } = useCatchError();
  const fetch = <Data, Response>(params: AxiosRequestConfig<Data>) => {
    const instance = axios.create();
    try {
      return instance<Response>(params);
    } catch (error) {
      console.log("Error useAxios", error);
      handleError(error);
      // throw error;
    }
  };

  return fetch;
}
