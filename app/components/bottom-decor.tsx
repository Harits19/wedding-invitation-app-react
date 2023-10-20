import SideBottomDecor from "./side-decor/side-bottom-decor";



export default function BottomDecor(){
  return (
    <div className="flex flex-row justify-between">
      <SideBottomDecor side="left" />
      <SideBottomDecor />
    </div>
  );
};