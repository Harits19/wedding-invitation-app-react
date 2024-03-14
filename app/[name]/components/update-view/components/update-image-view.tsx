import { Control, Controller, FieldPath } from "react-hook-form";
import SourceView from "../../source-view";
import { BaseState } from "@/app/[name]/hooks/use-invitation-detail";
import { ImageSrc } from "@/app/[name]/model/invitation-model";

export default function UpdateImageView({
  control,
  name,
}: {
  control: Control<BaseState, any>;
  name: FieldPath<BaseState>;
}) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => {
        const value = field.value as ImageSrc;
        return (
          <SourceView
            title={field.name}
            key={value?.link}
            src={value}
            onChange={(file) => {
              field.onChange({ ...value, local: file });
            }}
          />
        );
      }}
    />
  );
}
