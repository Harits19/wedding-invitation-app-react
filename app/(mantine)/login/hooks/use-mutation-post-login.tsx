import { useFetchPostLogin } from "@/app/services/use-fetch-post-login";
import { useFetchPostWedding } from "@/app/services/use-fetch-post-wedding";
import { useMutation } from "react-query";

export default function useMutationPostLogin() {
  return useMutation({
    mutationFn: useFetchPostLogin,
  });
}
