import InputDecoration, { InputDecorationProps } from "../input-decoration";
export type InputRawProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;
export default function Input({
  withLabel = false,
  ...props
}: Omit<InputDecorationProps, "children"> &
  InputRawProps & {
    withLabel?: boolean;
    onChangeVal?: (val: any) => void;
  }) {
  return (
    <InputDecoration
      label={withLabel ? props.placeholder : undefined}
      {...props}
    >
      <input className="rounded-none outline-none" {...props} onChange={(val) => {
        props.onChange?.(val);
        props.onChangeVal?.(val.target.value);
      }} />
    </InputDecoration>
  );
}
