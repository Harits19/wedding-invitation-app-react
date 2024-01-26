import { useFetchGetDetailWedding } from "@/app/services/use-fetch-get-detail-wedding";
import { useMyQuery } from "@/app/hooks/use-my-query";
import { DetailWeddingRequestModel } from "@/app/model/detail-wedding-request-model";

export const useQueryGetDetailWedding = (props: DetailWeddingRequestModel) => {
  const fetch = useFetchGetDetailWedding(props)
  return useMyQuery({
    queryKey: ["useQueryGetDetailWedding", props.id],
    queryFn: () => fetch
  });
};
