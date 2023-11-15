import Menu from "../components/menu";


export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <div className="absolute top-0 bottom-0 left-0 right-0 z-0 overflow-y-scroll">
        {children}
      </div>
      <Menu />
    </div>
  );
}
