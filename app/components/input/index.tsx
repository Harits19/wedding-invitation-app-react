import InputDecoration, { InputDecorationProps } from "../input-decoration";
export type InputRawProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;
export default function Input(
  props: Omit<InputDecorationProps, "children"> & InputRawProps
) {
  return (
    <InputDecoration {...props}>
      <input className="rounded-none outline-none" {...props} />
    </InputDecoration>
  );
}
