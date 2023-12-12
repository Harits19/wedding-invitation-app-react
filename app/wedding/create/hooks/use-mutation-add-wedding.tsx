import { useFetchPostWedding } from "@/app/api/use-fetch-post-wedding";
import { useMutation } from "react-query";

export default function useMutationAddWedding() {
  return useMutation({
    mutationFn: useFetchPostWedding,
  });
}
