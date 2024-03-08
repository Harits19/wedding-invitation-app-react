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
      <div className="ml-8">
        {children}
      </div>
    </div>
  );
}
