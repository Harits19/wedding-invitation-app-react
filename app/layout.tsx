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
import QueryProvider from "./[name]/components/query-provider";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "The Wedding of Harits & Fia",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <QueryProvider>
          <div>{children}</div>
        </QueryProvider>
      </body>
    </html>
  );
}
