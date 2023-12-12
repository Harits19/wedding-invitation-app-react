"use client";

import UpdateCreateWedding from "../components/update-create-wedding";
import useMutationAddWedding from "./hooks/use-mutation-add-wedding";

export default function CreateWedding() {
  const { mutate, isLoading } = useMutationAddWedding();
  return (
    <UpdateCreateWedding
      loading={isLoading}
      onSubmit={(val) => {
        console.log(val);
        mutate(val);
      }}
    />
  );
}
