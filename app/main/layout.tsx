import Icon from "../components/icons";
import Scaffold from "../components/scaffold";
import Home from "../components/svg/home";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Scaffold>
      {children}
      <div className="absolute bottom-0 z-50 bg-ae814c m-8 flex flex-row rounded-full right-0 left-0 p-2 ">
        <Home />
      </div>
    </Scaffold>
  );
}
