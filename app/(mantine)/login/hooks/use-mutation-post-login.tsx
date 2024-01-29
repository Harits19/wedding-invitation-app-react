import { LoginResponseModel } from "@/app/model/login-model";
import { ResponseModel } from "@/app/model/response-model";
import { useFetchPostLogin } from "@/app/services/use-fetch-post-login";
import { useFetchPostWedding } from "@/app/services/use-fetch-post-wedding";
import { useMutation } from "react-query";

export default function useMutationPostLogin({
  onSuccess,
}: {
  onSuccess: (value?: ResponseModel<LoginResponseModel>) => void;
}) {
  return useMutation({
    mutationFn: useFetchPostLogin,
    onSuccess,
  });
}
