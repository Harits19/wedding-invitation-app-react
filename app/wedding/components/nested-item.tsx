import { ReactNode } from "react";

export default function NestedItem(props: {
  children: ReactNode;
  title: string;
  action?: ReactNode;
}) {
  return (
    <>
      <div className="flex flex-row justify-between items-center">
        {props.title}
        {props.action}
      </div>
      <div className="ml-4 flex flex-col gap-y-2">{props.children}</div>
    </>
  );
}
