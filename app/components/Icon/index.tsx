import { SVGProps } from "react";
import { IconName, icons } from "./icons";

export default function Icon({
  name,
  ...props
}: SVGProps<SVGSVGElement> & {
  name: IconName;
}) {
  const Icon = icons[name];
  
  return <Icon {...props} />;
}
