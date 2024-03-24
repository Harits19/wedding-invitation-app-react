import { Controller, ControllerProps } from "react-hook-form";
import Button from "../../button";
import UpdateImageView from "./update-image-view";
import { BaseState } from "@/app/[name]/hooks/use-invitation-detail";

export default function UpdateArrayImageView({
  control,
  name,
}: {
  control: ControllerProps<BaseState>["control"];
  name: "photo.slide" | "photo.gallery";
}) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => {
        const value = field.value;
        return (
          <>
            <div className="flex flex-row ">
              <Button
                onClick={() => {
                  field.onChange([...value, {}]);
                }}
              >
                Add Slide
              </Button>
            </div>
            {value.map((item, index) => {
              return (
                <UpdateImageView
                  control={control}
                  name={`${field.name}.${index}`}
                  key={item.link}
                />
              );
            })}
          </>
        );
      }}
    />
  );
}
