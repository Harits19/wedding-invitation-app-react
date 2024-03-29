import { useFormContext } from "react-hook-form";
import {
  BaseState,
  useInvitationDetailProvider,
} from "../../hooks/use-invitation-detail";
import { Input } from "../ui/input";
import { InvitationState } from "../../model/invitation-model";
import { FormField } from "../ui/form";
import MyAudio from "../audio";
import BrideGroomView from "./bride-groom-view";
import TitleView from "../title-view";
import { Button } from "../ui/button";
import UpdateImageView from "./components/update-image-view";
import { usePatchInvitationDetail } from "../../services/use-invitation-service";
import UpdateArrayImageView from "./components/update-array-image-view";

export default function UpdateView() {
  const { data } = useInvitationDetailProvider();
  const { trigger, isMutating, reset } = usePatchInvitationDetail(data.name);

  const form = useFormContext<BaseState>();

  const { handleSubmit, control } = form;
  const onSubmit = async (value: InvitationState) => {
    console.log(value);
    reset();
    trigger(value);
  };
  if (!data) return <div />;
  return (
    <form
      className="flex flex-1 flex-col gap-y-4 h-screen overflow-y-scroll p-8"
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormField
        control={control}
        name={"name"}
        render={({ field }) => <Input {...field} readOnly />}
      />
      <MyAudio className="visible" />
      <FormField
        control={control}
        name={"music"}
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
            <div>{new Date(field.value).toString()}</div>
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

      <BrideGroomView name="groom" />
      <div className="h-4" />
      <BrideGroomView name="bride" />
      <div className="h-4" />
      <TitleView title="Address">
        <FormField
          control={control}
          name="address.detail"
          render={({ field }) => <Input {...field} />}
        />
        <FormField
          control={control}
          name="address.latitude"
          render={({ field }) => <Input {...field} />}
        />
        <FormField
          control={control}
          name="address.longitude"
          render={({ field }) => <Input {...field} />}
        />
      </TitleView>
      <div className="h-4" />
      <TitleView title="Photo">
        <UpdateImageView control={control} name="photo.cover" />
        <UpdateImageView control={control} name="photo.side.top" />
        <UpdateImageView control={control} name="photo.side.bottom" />
        <UpdateImageView control={control} name="photo.background" />
        <UpdateArrayImageView control={control} name="photo.slide" />
        <UpdateArrayImageView control={control} name="photo.gallery" />
      </TitleView>

      <div>
        <Button isLoading={isMutating} type="submit">
          Submit
        </Button>
      </div>
    </form>
  );
}
