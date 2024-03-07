import { Form, FormProvider, useForm } from "react-hook-form";
import { useInvitationDetailProvider } from "../../hooks/use-invitation-detail";
import { Input } from "../ui/input";
import { InvitationResponse } from "../../model/invitation-model";
import { FormField } from "../ui/form";
import Button from "../button";
import MyAudio from "../audio";

export default function UpdateView() {
  const { data, setInvitationDetail } = useInvitationDetailProvider();
  const form = useForm({
    defaultValues: data,
  });
  const { handleSubmit } = form;
  const onSubmit = (value: InvitationResponse) => {
    console.log("before", value?.musicLocal);
  };
  if (!data) return <div />;
  return (
    <FormProvider {...form}>
      <Form
        // {...form}
        className="flex flex-1 flex-col gap-y-4"
        onSubmit={() => handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name={"name"}
          render={({ field }) => <Input {...field} readOnly />}
        />

        <FormField
          control={form.control}
          name={"initial"}
          render={({ field }) => <Input {...field} />}
        />
        <MyAudio className="visible" />
        <FormField
          control={form.control}
          name={"musicLocal"}
          render={({ field }) => (
            <div>
              <Input
                {...field}
                value={undefined}
                accept=".mp3"
                type="file"
                onChange={(event) => {
                  const file = event.target.files?.item(0);
                  if (!file) return;
                  setInvitationDetail({
                    musicLocal: file,
                  });
                  field.onChange(file);
                }}
              />
            </div>
          )}
        />
        <div className="h-4" />
        <Button type="submit">Submit</Button>
      </Form>
    </FormProvider>
  );
}
