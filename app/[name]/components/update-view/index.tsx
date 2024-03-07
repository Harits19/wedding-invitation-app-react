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
  const { handleSubmit, control } = form;
  const onSubmit = (value: InvitationResponse) => {
    console.log("before", value?.musicLocal);
  };
  if (!data) return <div />;
  return (
    <FormProvider {...form}>
      <Form
        className="flex flex-1 flex-col gap-y-4"
        onSubmit={() => handleSubmit(onSubmit)}
      >
        <FormField
          control={control}
          name={"name"}
          render={({ field }) => <Input {...field} readOnly />}
        />

        <MyAudio className="visible" />
        <FormField
          control={control}
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
        <FormField
          control={control}
          name={"initial"}
          render={({ field }) => <Input {...field} />}
        />
        <FormField
          control={control}
          name="date"
          render={({ field }) => (
            <div>
              <div>{new Date(field.value).toISOString()}</div>
              <Input {...field} type="date" value={undefined} />
              <Input
                {...field}
                type="time"
                value={undefined}
                onChange={(value) => {
                  const time = value.target.value;
                  const [hour, minute] = time.split(":");
                  const newDate = new Date(field.value);
                  newDate.setHours(Number(hour));
                  newDate.setMinutes(Number(minute));
                  field.onChange(newDate);
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
