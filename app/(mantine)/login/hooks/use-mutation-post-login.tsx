import { useFetchPostLogin } from "@/app/services/use-fetch-post-login";
import { useMutation } from "react-query";

export default function useMutationPostLogin({
  onSuccess,
}: {
  onSuccess: () => void;
}) {
  return useMutation({
    mutationFn: useFetchPostLogin,
    onSuccess,
  });
}
