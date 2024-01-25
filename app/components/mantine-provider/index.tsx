import { MantineProvider, createTheme } from "@mantine/core";
import { ReactNode } from "react";

export default function MantineProviderComponent({
  children,
}: {
  children: ReactNode;
}) {
  const theme = createTheme({});
  return <MantineProvider theme={theme}>{children}</MantineProvider>;
}
