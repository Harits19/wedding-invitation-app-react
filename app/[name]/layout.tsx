"use client";

import { ReactNode } from "react";
import { GlobalStateProvider } from "./hooks/use-global-state";
import { InvitationDetailProvider } from "./hooks/use-invitation-detail";

/* 
TODO 

- enable eslint
- implement create wedding
- implement update wedding

*/

export default function Layout({
  params: { name },
  children,
}: {
  params: { name: string };
  children: ReactNode;
}) {
  return (
    <GlobalStateProvider>
      <InvitationDetailProvider name={name}>
        {children}
      </InvitationDetailProvider>
    </GlobalStateProvider>
  );
}
