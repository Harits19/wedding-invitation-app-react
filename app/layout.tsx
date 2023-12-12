import type { Metadata } from "next";
import "./global.scss";

import "@fontsource/poppins"; // Defaults to weight 400
import "@fontsource/poppins/400.css"; // Specify weight
import "@fontsource/poppins/400-italic.css";

import "@fontsource/averia-serif-libre"; // Defaults to weight 400
import "@fontsource/averia-serif-libre/400.css"; // Specify weight
import "@fontsource/averia-serif-libre/400-italic.css"; // Specify weight and style

import "@fontsource/berkshire-swash"; // Defaults to weight 400
import "@fontsource/berkshire-swash/400.css"; // Specify weight
import { GlobalStateProvider } from "./hooks/useGlobalState";
import Div from "./components/div";
import QueryProvider from "./components/query-provider";

export const metadata: Metadata = {
  title: "Wedding Invitation App",
  description: "Wedding invitation app with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <GlobalStateProvider>
      <html lang="en">
        <body>
          <QueryProvider>
            <Div>{children}</Div>
          </QueryProvider>
        </body>
      </html>
    </GlobalStateProvider>
  );
}
