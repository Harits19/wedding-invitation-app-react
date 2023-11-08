import InputDecoration, { InputDecorationProps } from "../input-decoration";
export type SelectRawProps = React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>;
export default function Select(
  props: Omit<InputDecorationProps, "children"> & SelectRawProps
) {
  return (
    <InputDecoration {...props}>
      <select className="rounded-none outline-none resize-none" {...props} />
    </InputDecoration>
  );
}
