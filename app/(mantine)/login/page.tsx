"use client";

import Input from "@/app/components/input";
import { LoginRequestModel } from "@/app/model/login-model";
import { Button, PasswordInput } from "@mantine/core";
import { useForm } from "react-hook-form";
import useMutationPostLogin from "./hooks/use-mutation-post-login";
import { useRouter } from "next/navigation";

export default function Login() {
  const { control, handleSubmit } = useForm<LoginRequestModel>({});
  const router = useRouter();
  const { mutate, isLoading } = useMutationPostLogin({
    onSuccess: (value) => {
      console.log("onSuccess", value);
      router.push("/admin");
    },
  });
  return (
    <div className="h-screen w-screen items-center justify-center flex flex-col ">
      <div className=" w-1/3 self-center p-6 rounded-2xl rounded-2 shadow-2xl flex flex-col">
        <Input
          controller={{
            control,
            name: "name",
            rules: { required: "required" },
          }}
          label="Username"
        />
        <Input
          controller={{
            control,
            name: "password",
            rules: { required: "required" },
          }}
          label="Password"
          type="password"
        />
        <div className="h-8" />
        <Button
          // disabled={!formState.isValid}
          className="w-full"
          loading={isLoading}
          onClick={() => {
            handleSubmit((value) => {
              console.log("start mutate");
              mutate(value);
            })();
          }}
        >
          Login
        </Button>
      </div>
    </div>
  );
}
