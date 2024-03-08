import { ReactNode } from "react";

export default function TitleView({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div>
      <span className="capitalize">{title}</span>
      <div className="ml-8 gap-y-4 flex flex-col">{children}</div>
    </div>
  );
}
