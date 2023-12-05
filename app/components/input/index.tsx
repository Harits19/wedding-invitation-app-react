import InputDecoration, { InputDecorationProps } from "../input-decoration";
import {
  ControllerProps,
  FieldValues,
  Path,
  RegisterOptions,
  UseControllerProps,
  UseFormRegister,
  useController,
  useFormContext,
} from "react-hook-form";
export type InputRawProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export default function Input<TFieldValue extends FieldValues>({
  withLabel = false,
  name,
  option,
  required,
  ...props
}: Omit<InputDecorationProps, "children"> &
  Omit<InputRawProps, "name"> & {
    withLabel?: boolean;
    name?: Path<TFieldValue>;
    required?: boolean;
    option?: Omit<UseControllerProps<TFieldValue>, "control" | "name">;
  }) {
  const { control } = useFormContext<TFieldValue>();
  const { field } =
    (name &&
      // eslint-disable-next-line react-hooks/rules-of-hooks
      useController({
        control,
        name,
        ...option,
        rules: {
          required: required,
          ...option?.rules,
        },
      })) ??
    {};
  return (
    <InputDecoration
      label={withLabel ? props.placeholder : undefined}
      {...props}
    >
      <input
        value={field?.value}
        className="rounded-none outline-none"
        name={name}
        {...props}
        onChange={(val) => {
          const newValue = val.target.value;
          props.onChange?.(val);
          field?.onChange?.(newValue);
        }}
      />
    </InputDecoration>
  );
}
