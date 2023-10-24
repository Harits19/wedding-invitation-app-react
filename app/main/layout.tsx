import Icon from "../components/Icon";
import { IconName } from "../components/Icon/icons";
import Text from "../components/averia";
import Menu from "../components/menu";
import Message from "../components/message";
import Scaffold from "../components/scaffold";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Scaffold>
      <Message />
      {children}
      <Menu />
    </Scaffold>
  );
}
