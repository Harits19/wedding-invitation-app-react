"use client";

import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { SWRConfig } from "swr";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    },
  },
});

export default function QueryProvider(props: { children: ReactNode }) {
  return (
    <SWRConfig>
      <QueryClientProvider client={queryClient}>
        {props.children}
      </QueryClientProvider>
    </SWRConfig>
  );
}
