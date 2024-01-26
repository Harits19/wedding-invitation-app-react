import { useFetchGetListTemplate } from "@/app/services/use-fetch-get-list-weding";
import { useGlobalState } from "@/app/hooks/use-global-state";
import { useMyQuery } from "@/app/hooks/use-my-query";

export const useQueryGetListWedding = ({
  onError,
}: {
  onError: (value: unknown) => void;
}) => {
  const { state } = useGlobalState();
  const apiKey = state.apiKey ?? "";
  return useMyQuery({
    queryKey: ["useQueryGetListWedding", apiKey],
    queryFn: useFetchGetListTemplate,
    enabled: Boolean(apiKey),
    onError,
  });
};