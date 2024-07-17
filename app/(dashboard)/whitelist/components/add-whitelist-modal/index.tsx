import Input from "@/app/components/input";
import { Button } from "@/app/components/ui/button";
import { Dialog } from "@/app/components/ui/dialog";
import { useWhitelist } from "@/app/core/hooks/use-whitelist";
import { WhitelistRequest } from "@/app/core/models/whitelist-model";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";

export default function AddWhitelistModal() {
  const { post } = useWhitelist();

  const { control, handleSubmit } = useForm<WhitelistRequest>({});

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Button onClick={() => setShowModal(true)}>Add Whitelist</Button>
      <Dialog open={showModal} onOpenChange={setShowModal}>
        <Controller
          control={control}
          name="data.0.name"
          rules={{
            required: {
              value: true,
              message: "Required",
            },
          }}
          render={({ field, fieldState }) => (
            <Input
              placeholder="Name"
              {...field}
              info={fieldState.error?.message}
            />
          )}
        />

        <Controller
          control={control}
          name="token"
          rules={{
            required: {
              value: true,
              message: "Required",
            },
          }}
          render={({ field, fieldState }) => (
            <Input
              placeholder="Token"
              {...field}
              info={fieldState.error?.message}
            />
          )}
        />

        <Button
          loading={post.isMutating}
          onClick={handleSubmit(async (value) => {
            await post.trigger(value);
            setShowModal(false);
          })}
        >
          Submit
        </Button>
      </Dialog>
    </>
  );
}
