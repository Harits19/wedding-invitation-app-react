"use client";

import { GlobalStateProvider } from "./hooks/use-global-state";
import { InvitationDetailProvider } from "./hooks/use-invitation-detail";
import Main from "./main/page";

/* 
TODO 

- enable eslint
- implement create wedding
- implement update wedding

*/

export default function Base({
  params: { name },
}: {
  params: { name: string };
}) {
  return (
    <GlobalStateProvider>
      <InvitationDetailProvider name={name}>
        <Main />
      </InvitationDetailProvider>
    </GlobalStateProvider>
  );
}
