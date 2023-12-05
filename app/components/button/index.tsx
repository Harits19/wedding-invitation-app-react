type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export default function Button(props: Props) {
  return (
    <button
      {...props}
      className={`${props.disabled ? "opacity-30" : ""} ${
        props.className
      } bg-blue-500 text-white p-2 rounded-lg text-sm
      `}
    />
  );
}
