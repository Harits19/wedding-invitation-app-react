import { TextInput, TextInputProps } from "@mantine/core";
import InputDecoration, { InputDecorationProps } from "../input-decoration";
import { Controller, ControllerProps, FieldValues } from "react-hook-form";
export type InputRawProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

interface RawInputProps
  extends Omit<InputDecorationProps, "children">,
    TextInputProps {
  withLabel?: boolean;
  onChangeText?: (val: string) => void;
}

function RawInput({ withLabel = false, ...props }: RawInputProps) {
  return (
    <TextInput
      className="rounded-none outline-none"
      {...props}
      onChange={(val) => {
        props.onChange?.(val);
        props.onChangeText?.(val.target.value);
      }}
    />
  );
}

export default function Input<TFieldValue extends FieldValues>({
  controller,
  required,
  ...props
}: RawInputProps & {
  controller?: Omit<ControllerProps<TFieldValue>, "render">;
}) {
  if (controller) {
    return (
      <Controller
        {...controller}
        rules={{
          required,
          ...controller.rules,
        }}
        render={({ field, fieldState }) => {
          let value = props.type === "file" ? props.value : field.value;
          if (props.type === "date" && typeof value === "string") {
            value = new Date(value)
              .toISOString()
              .split(":")[0]
              .substring(0, 10);
          }
          const error = fieldState.error?.message;

          return (
            <RawInput
              {...props}
              {...field}
              onChange={(val) => {
                field.onChange(val.target.value);
                props.onChange?.(val);
              }}
              error={error}
            />
          );
        }}
      />
    );
  }
  return <RawInput {...props} />;
}
