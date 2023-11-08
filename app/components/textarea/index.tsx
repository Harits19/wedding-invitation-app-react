import InputDecoration, { InputDecorationProps } from "../input-decoration";
export type TextareaRawProps = React.DetailedHTMLProps<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>;
export default function TextArea(
  props: Omit<InputDecorationProps, "children"> & TextareaRawProps
) {
  return (
    <InputDecoration {...props}>
      <textarea className="rounded-none outline-none resize-none" {...props} />
    </InputDecoration>
  );
}
