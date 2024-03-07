"use client";

import Cover from "./components/cover";
import { GlobalStateProvider } from "./hooks/use-global-state";
import { InvitationDetailProvider } from "./hooks/use-invitation-detail";
import Main from "./main/page";

/* 
TODO 

- enable eslint
- implement create wedding
- implement update wedding

*/

export default function Base() {
  return (
    <InvitationDetailProvider name="fulan&fulanah">
      <GlobalStateProvider>
        <Cover>
          <Main />
        </Cover>
      </GlobalStateProvider>
    </InvitationDetailProvider>
  );
}
