"use client";

import Cover from "./components/cover";
import { useInvitationDetail } from "./hooks/use-invitation-detail";
import Main from "./main/page";

/* 
TODO 

- enable eslint
- implement create wedding
- implement update wedding

*/

export default function Base() {
  const { data, isLoading, error } = useInvitationDetail("fulan&fulanah");

  if(isLoading){
    return <div>IsLoading</div>
  }

  return (
    <Cover data={data}>
      <Main />
    </Cover>
  );
}
