"use client";

import { useRouter } from "next/navigation";
import UpdateCreateWedding from "../components/update-create-wedding";
import useMutationAddWedding from "./hooks/use-mutation-add-wedding";

export default function CreateWedding() {
  const { mutate, isLoading } = useMutationAddWedding();
  const { back } = useRouter();
  return (
    <UpdateCreateWedding
      loading={isLoading}
      onSubmit={(val) => {
        console.log(val);
        mutate(val, {
          onSuccess: () => {
            back();
          },
          onError: (error) => {
            window.alert(`value:${error} \nstring:${JSON.stringify(error)}`);
          },
        });
      }}
    />
  );
}
