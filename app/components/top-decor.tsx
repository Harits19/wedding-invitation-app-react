import SideTopDecor from "./side-decor/side-top-decor";

export default function TopDecor(){
  return (
    <div className="flex flex-row justify-between">
      <SideTopDecor side="left" />
      <SideTopDecor />
    </div>
  );
};