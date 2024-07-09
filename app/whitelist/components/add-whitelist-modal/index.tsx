import Input from "@/app/components/input";
import { Button } from "@/app/components/ui/button";
import { Dialog } from "@/app/components/ui/dialog";
import { useWhitelist } from "@/app/core/hooks/use-whitelist";
import { WhitelistModel } from "@/app/core/models/whitelist-model";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";

export default function AddWhitelistModal() {
  const { post } = useWhitelist();

  const { control, handleSubmit } = useForm<WhitelistModel>({});
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Button onClick={() => setShowModal(true)}>Add Whitelist</Button>
      <Dialog open={showModal} onOpenChange={setShowModal}>
        <Controller
          control={control}
          name="name"
          rules={{
            required: {
              value: true,
              message: "Required",
            },
          }}
          render={({ field, fieldState }) => (
            <Input {...field} info={fieldState.error?.message} />
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
