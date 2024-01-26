"use client";

import Input from "@/app/components/input";
import { LoginModel } from "@/app/model/login-model";
import { Button, TextInput } from "@mantine/core";
import { useForm } from "react-hook-form";
import useMutationPostLogin from "./hooks/use-mutation-post-login";

export default function Login() {
  const { control, watch, formState, handleSubmit } = useForm<LoginModel>({});
  const { mutate, isLoading } = useMutationPostLogin();
  return (
    <div className="h-screen w-screen items-center justify-center flex flex-col ">
      <div className=" w-1/3 self-center p-6 rounded-2xl rounded-2 shadow-2xl flex flex-col">
        <Input
          controller={{
            control,
            name: "username",
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
