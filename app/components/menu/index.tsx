import Icon from "../Icon";
import { IconName } from "../Icon/icons";

export default function Menu() {
  const menus: {
    name: IconName;
  }[] = [
    {
      name: "home",
    },
    {
      name: "people",
    },
    {
      name: "collections",
    },
    {
      name: "place",
    },
    {
      name: "music",
    },
  ];
  return (
    <div className="absolute bottom-0 z-50 bg-ae814c m-8 flex flex-row rounded-full right-0 left-0 p-2 justify-between px-5 ">
      {[menus.map((e, index) => <Icon key={index} name={e.name} />)]}
    </div>
  );
}
