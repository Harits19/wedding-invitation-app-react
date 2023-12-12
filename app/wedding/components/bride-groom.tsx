import { WeddingModel } from "@/app/model/wedding-model";
import { useFormContext } from "react-hook-form";

export default function BrideGroom({
  type,
  ...props
}: {
  title: string;
  type: "bride" | "groom";
}) {
  const { watch, control, setValue } = useFormContext<WeddingModel>();
  const value = watch(type);
  const titles = value.titles;
  return (
    <NestedItem title={props.title}>
      <Input withLabel placeholder="Name" name={`${type}.name`} required />
      <NestedItem
        title="Titles"
        action={
          <button
            className="bg-blue-500 text-xs rounded-md text-white p-2"
            onClick={() => {
              setValue(`${type}.titles`, [...titles, ""]);
            }}
          >
            Add Title
          </button>
        }
      >
        {titles.map((title, index) => {
          const isDisabled = index === 0;
          return (
            <div
              key={index}
              className="flex flex-row items-center justify-center"
            >
              <button
                className={`mt-5 tex-xs text-red-500 mr-2 ${
                  isDisabled ? "opacity-0" : ""
                }`}
                disabled={isDisabled}
                onClick={() => {
                  if (isDisabled) {
                    return;
                  }
                  const tempTitles = [...titles];
                  tempTitles.splice(index, 1);
                  setValue(`${type}.titles`, tempTitles);
                }}
              >
                Delete
              </button>
              <div className="flex flex-1 flex-col ">
                <Input
                  value={title}
                  withLabel
                  placeholder={`Title ${index + 1}`}
                  controller={{
                    name: `${type}.titles.${index}`,
                    control,
                  }}
                  required
                />
              </div>
            </div>
          );
        })}
      </NestedItem>
      <Input
        withLabel
        placeholder="Photo"
        controller={{
          control,
          name: `${type}.photo`,
        }}
        required
      />
      <Input
        withLabel
        placeholder="Father"
        controller={{
          control,
          name: `${type}.father`,
        }}
        required
      />
      <Input
        withLabel
        placeholder="Mother"
        controller={{
          control,
          name: `${type}.mother`,
        }}
        required
      />
      <Input
        withLabel
        placeholder="Address"
        controller={{
          control,
          name: `${type}.address`,
        }}
        required
      />
    </NestedItem>
  );
}
