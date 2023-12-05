type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export default function Button(props: Props) {
  return (
    <button
      {...props}
      className={`${props.disabled ? "opacity-30" : ""} ${props.className}`}
    />
  );
}
